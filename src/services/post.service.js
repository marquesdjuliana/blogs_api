const { Category, User, BlogPost } = require('../models');

// const createCategory = async (category) => {
//   const newCategory = await Category.create(category);
//   const data = { id: newCategory.dataValues.id, ...category };
//   return { status: 'CREATED', data };
// };
const listAllPosts = async () => {
  const posts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
    },
  );

  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  // createCategory,
  listAllPosts,
};