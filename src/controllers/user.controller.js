const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createUser = async (req, res) => {
  const { body } = req;
  const { status, data } = await userService.createUser(body);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createUser,
};