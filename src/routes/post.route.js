const route = require('express').Router();
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.get('/', validateToken, postController.listAllPosts);

module.exports = route;