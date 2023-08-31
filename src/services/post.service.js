const { Category, User, BlogPost, PostCategory } = require('../models');
const { verifyCategoryIds } = require('../validations/verifyFields');

const listAllPosts = async () => {
  const posts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
    },
  );

  return { status: 'SUCCESSFUL', data: posts };
};

const insertPostCategories = async (postId, categoryIds) => {
  const insertionPromises = categoryIds
  .map((categoryId) => PostCategory.create({ postId, categoryId }));
  await Promise.all(insertionPromises);
};

const createPost = async (postInfo, userId) => {
  const { title, content, categoryIds } = postInfo;

  const areCategoriesValid = await verifyCategoryIds(categoryIds);
  if (!areCategoriesValid) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
  const currentDate = new Date().toISOString();
  const newPostData = { title, content, userId, published: currentDate, updated: currentDate };
  const createdPost = await BlogPost.create(newPostData);
  if (createdPost) {
    await insertPostCategories(createdPost.id, categoryIds);
    return { status: 'CREATED', data: createdPost };
  }
};
module.exports = {
  listAllPosts,
  createPost,
};