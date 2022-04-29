const { Schema, SchemaType, SchemaTypes } = require('.');

class Gender extends SchemaTypes._String_ {
  static Male = Symbol("Male");
  static Female = Symbol("Female");
  
  constructor() {
    super();
  }

  call(val) {
    if(val == Gender.Male ||
      val == Gender.Female)
      return val;

    val = super.call(val);

    if(val === undefined) return;

    if(val.toUpperCase() == 'M' ||
      val.toUpperCase() == "MALE")
      return Gender.Male;
    else if(val.toUpperCase() == 'F' ||
           val.toUpperCase() == "FEMALE")
      return Gender.Female;
  }
}

const Friend = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  gender: Gender
});

const Person = new Schema({
  ...Friend.raw,
  friends: [String],
  bestFriend: Friend
});

const John = new Person({
  name: "John",
  age: 37,
  gender: 'M',
  favColor: "Red",
  kids: 0,
  bestFriend: {
    name: "Steve",
    age: 31,
    gender: 'M',
    kids: 2
  },
  friends: ["Carl", "Maria", "Meep"],
  animals: 1
});

console.log(John);
