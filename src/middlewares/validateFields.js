const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { verifyFields } = require('../validations/verifyFields');
const { userSchema, postSchema } = require('../validations/schemas');

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(mapStatusHTTP('BAD_REQUEST'))
    .json({ message: 'Some required fields are missing' });
  }
  next();
};
const validateUser = (req, res, next) => {
  const user = req.body;
  const requiredFields = ['displayName', 'email', 'password'];

  const areAllFieldsPresent = verifyFields(requiredFields, user);
  if (!areAllFieldsPresent) {
    const errorMessage = 'Some required fields are missing';
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: errorMessage });
  }

  const { error } = userSchema.validate(user);
  if (error) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: error.message });
  }

  next();
};
const validateCategory = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: '"name" is required' });
  }
  next();
};
const validatePost = (req, res, next) => {
  const post = req.body;
  const keys = ['title', 'content', 'categoryIds'];
  const allInfo = verifyFields(keys, post);
  if (!allInfo) return res.status(400).json({ message: 'Some required fields are missing' });
  const { error } = postSchema.validate(post);
  if (error) return res.status(400).json({ message: error.message });
  next();
};
module.exports = {
  validateLogin,
  validateUser,
  validateCategory,
  validatePost,
};