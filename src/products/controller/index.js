const products = require('../products.json')
const getAllProducts = async (req, res) => {
	const page = Number(req.query.page)
	const size = Number(req.query.size)
	const pageNumber = page || 1; // Get the current page number from the query parameters
  const startIndex = (pageNumber - 1) * size;
  const endIndex = startIndex + size;
  const productsPagination = products.slice(startIndex, endIndex);
  return res.status(200).json(productsPagination);
};

module.exports = { getAllProducts }