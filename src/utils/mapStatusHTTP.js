const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

const mapStatusHTTP = (status) => httpErrorMap[status];

module.exports = mapStatusHTTP;