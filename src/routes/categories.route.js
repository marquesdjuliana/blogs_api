const route = require('express').Router();
const validateToken = require('../middlewares/validateToken');
const { categoriesController } = require('../controllers');
const { validateCategory } = require('../middlewares/validateFields');

route.post('/', validateToken, validateCategory, categoriesController.createCategory);

module.exports = route;