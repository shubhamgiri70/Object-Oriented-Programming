// Create Class
// Convert the give image into class using inheritance.

// name is the property
// eat() is the method
// Property ending with () is method. And others are properties.

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    console.log(`${this.name} can eat`);
  }

  sleep() {
    console.log(`${this.name} sleep`);
  }

  walk() {
    console.log(`${this.name} walk`);
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }

  createArt() {
    console.log(`I create ${this.kind} art`);
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }

  teach() {
    console.log(`I'm a teacher at ${this.instituteName}`);
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }

  play() {
    console.log(`I'm a sportsperson and I play ${this.sportsName}`);
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }

  playCricket() {
    console.log(`I'm a cricketer and I play for ${this.teamName}`);
  }
}

// Example usage:
let sunny = new Person("Sunny", 18, "M");
sunny.eat(); // Output: Sunny can eat

let artist = new Artist("Alex", 30, "F", "abstract");
artist.createArt(); // Output: I create abstract art

let teacher = new Teacher("Alex", 30, "F", "Apex");
teacher.teach(); // Output: I'm a teacher at Apex

let sportsperson = new Player("Alex", 30, "F", "cricket");
sportsperson.play(); // Output: I'm a sportsperson and I play cricket

let cricketer = new Cricketer("Alex", 30, "F", "cricket", "MI");
cricketer.playCricket(); // Output: I'm a cricketer and I play for MI
cricketer.play(); // Output: I'm a sportsperson and I play cricket
cricketer.eat(); // Output: Alex can eat
cricketer.sleep(); // Output: Alex sleep
cricketer.walk(); // Output: Alex walk
