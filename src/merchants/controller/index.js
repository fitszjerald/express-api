const merchants = require('../merchants.json');

const getAllMerchants = async (req, res) => {
  return res.status(200).json({ data: merchants });
};

module.exports = { getAllMerchants };
