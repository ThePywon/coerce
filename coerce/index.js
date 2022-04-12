// Fetch everything
module.exports = {
  deepClone: require("./deepClone"),
  ...require("./Schema"),
  SchemaType: require("./SchemaType"),
  SchemaTypes: require("./SchemaTypes")
};
