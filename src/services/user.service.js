const { User } = require('../models');
const { generateToken } = require('../utils/authenticateToken');

const createUser = async (newUserDetails) => {
  const existingUser = await User.findOne({ where: { email: newUserDetails.email } });
  
  if (existingUser) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const newUser = await User.create(newUserDetails);
  if (newUser) {
      const token = generateToken({ email: newUserDetails.email });
    return { status: 'CREATED', data: { token } };
  }
};
const listAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'SUCCESSFUL', data: users };
};
module.exports = {
  createUser,
  listAllUsers,
};