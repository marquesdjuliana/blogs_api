const verifyFields = (infos, body) => infos.every((info) => info in body);

module.exports = verifyFields;