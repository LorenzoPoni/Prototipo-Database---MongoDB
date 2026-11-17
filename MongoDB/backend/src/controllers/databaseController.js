const { writeData } = require("../utils/writeData");

exports.databaseController = async (req, res) => {
    return writeData(req, res);
};