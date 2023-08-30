const { Category } = require('../models');

const createCategory = async (category) => {
  const createdCategory = await Category.create(category);
  return { status: 'CREATED', data: createdCategory.dataValues };
};

module.exports = {
  createCategory,
};