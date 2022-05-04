const { Schema, SchemaType, SchemaTypes } = require('.');

const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
});

const John = new Person({
  name: "John",
  favColor: "Red",
  age: 37,
  friends: ["Steve", "Alex", "Meep"],
  pets: 0,
  kids : 2,
  birthday: "1984"
});

console.log(John);
