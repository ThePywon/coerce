// Fetch all default SchemaTypes
module.exports = {
  _Boolean_: require("./Boolean"),
  _Number_: require("./Number"),
  Range: require("./Range"),
  _String_: require("./String"),
  _Date_: require("./Date"),
  DateRange: require("./DateRange"),
  _Function_: require("./Function"),
  _RegExp_: require("./RegExp"),
  Integer: require("./Integer"),
  IntRange: require("./IntRange"),
  Byte: require("./Byte"),
  BigInt: require("./BigInt"),
  BigIntRange: require("./BigIntRange"),
  Any: require("./Any")
}
