const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const listAllPosts = async (req, res) => {
  const { status, data } = await postService.listAllPosts();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  listAllPosts,
};