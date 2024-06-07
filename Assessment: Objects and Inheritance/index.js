/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;

  return obj;
}

var vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                         USING OBJECT.CREATE
  ****************************************************************/

/*** CHALLENGE 1 of 3 ***/

let personStore = {
  greet: function () {
    console.log("hello");
  },
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let person = Object.create({});
  person.name = name;
  person.age = age;

  return person;
}

var sandra = personFromPersonStore("Sandra", 26);
Object.setPrototypeOf(sandra, personStore);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                      USING THE 'NEW' KEYWORD
  ****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  // add code here
  this.greet = function () {
    console.log("hello");
  };
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function PersonFromConstructor(name, age) {
  let obj = new PersonConstructor();
  obj.name = name;
  obj.age = age;

  return obj;
}

var mike = new PersonFromConstructor("Mike", 30);

/********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

PersonConstructor.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                          USING ES6 CLASSES
  ****************************************************************/

/*** CHALLENGE 1 of 3 ***/

// /********* Uncomment this line to test your work! *********/

class PersonClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`hello`);
  }
}

var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

/********* Uncomment these lines to test your work! *********/

class DeveloperClass extends PersonClass {
  constructor(name) {
    super(name);
  }

  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }
}

var thai = new DeveloperClass("Thai", 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                        EXTENSION: SUBCLASSING
  ****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log("I am a " + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
  let obj = userFactory(name, score);
  Object.setPrototypeOf(obj, adminFunctionStore);
  obj.type = "Admin";
  return obj.type;
}

adminFunctionStore.sharePublicMessgae = function () {
  console.log("Welcome user");
};

var adminFromFactory = adminFactory("Eva", 5);

/********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"
