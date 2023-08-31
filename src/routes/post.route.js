const route = require('express').Router();
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const { validatePost } = require('../middlewares/validateFields');

route.get('/', validateToken, postController.listAllPosts);
route.post('/', validateToken, validatePost, postController.createPost);
module.exports = route;