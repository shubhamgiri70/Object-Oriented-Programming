let animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

function createAnimals(location, numberOfLegs) {
  let obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;

  return obj;
}

let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColor: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

function createDog(location, numberOfLegs, name, color) {
  let obj = createAnimals(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogMethods);
  obj.name = name;
  obj.color = color;

  return obj;
}

Object.setPrototypeOf(dogMethods, animalMethods);

let catMethods = {
  meow: function () {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes: function (newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

function createCat(location, numberOfLegs, name, colorOfEyes) {
  let obj = createAnimals(location, numberOfLegs);
  Object.setPrototypeOf(obj, catMethods);
  obj.name = name;
  obj.colorOfEyes = colorOfEyes;

  return obj;
}

Object.setPrototypeOf(catMethods, animalMethods);
