const fs = require("fs");
const data = fs.readFileSync("./shloks.json");
module.exports.shloks = JSON.parse(data.toString("utf8")).shloks;
