const jwt = require('jsonwebtoken');
const { User } = require('../models');

const createUser = async (newUserDetails) => {
  const existingUser = await User.findOne({ where: { email: newUserDetails.email } });
  
  if (existingUser) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const newUser = await User.create(newUserDetails);
  if (newUser) {
    const token = jwt.sign(
      { email: newUserDetails.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
        algorithm: 'HS256',
      },
    );
    return { status: 'CREATED', data: { token } };
  }
};
module.exports = {
  createUser,
};