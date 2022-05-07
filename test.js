const { Schema, SchemaType, SchemaTypes } = require('.');

const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
});

const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: ["Steve", "Carl", "Meep"]
});

console.log(John);
