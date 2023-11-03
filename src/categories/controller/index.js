const categories = require('../categories.json')
const getAllCategories = async (res, parameters) => {
  return res .status(200).json(categories);
};

module.exports = { getAllCategories }