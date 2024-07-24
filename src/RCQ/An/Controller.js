
const { queryGetAllAn } = require("./Query");
const { handleRequest } = require("../../config/refactor");

exports.getAllAn = async (req, res) => {
  handleRequest(res, queryGetAllAn);
};
