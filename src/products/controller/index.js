const products = require('../products.json');

const getAllProducts = async (req, res) => {
  const { categoryId } = req.params;
  const { merchantIds } = req.body;
  if (merchantIds && !Array.isArray(merchantIds)) {
    return res.status(400);
  }
  const page = Number(req.query.page);
  const size = Number(req.query.size);
  let productsPagination = products;
  if (categoryId) {
    productsPagination = productsPagination.filter(
      (i) => i.categoryId === Number(categoryId)
    );
  }
  if (merchantIds && merchantIds.length) {
    productsPagination = productsPagination.filter((i) =>
      merchantIds.includes(i.merchantId)
    );
  }
  const totalItems = productsPagination.length;
  const pageNumber = page || 1; // Get the current page number from the query parameters
  const startIndex = (pageNumber - 1) * size;
  const endIndex = startIndex + size;
  productsPagination = productsPagination.slice(startIndex, endIndex);
  return res.status(200).json({ data: productsPagination, totalItems });
};

module.exports = { getAllProducts };
