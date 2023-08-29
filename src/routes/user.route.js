const route = require('express').Router();
const { userController } = require('../controllers');
const { validateUser } = require('../middlewares/validateFields');

route.post('/', validateUser, userController.createUser);

module.exports = route;