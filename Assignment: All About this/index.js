console.log(this.document === document); // true

// ------------

console.log(this === window); // true

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); //  Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// ------------

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window); // false

// ------------

function foo() {
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //  Simple function call
//  true
// ------------

// This for IIFE
(function () {
  console.log("Anonymous function invocation");
  console.log(this === window);
})(); // Anonymous function invocation
// true

// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); // {someMethod: ƒ}

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Name: Paul Adams

// ------------

function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Simple function call
// false
let fun1 = user.foo1;
fun1(); // true
user.foo1(); // false

// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
}; // 9

obj.getX(); // 81

var retrieveX = obj.getX;
retrieveX(); // 9

var boundGetX = retrieveX.bind(obj);
boundGetX(); // 81

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Name: Paul Adams

person.displayName.call(person2); // Name: Paul Adam

// ------------

const a = {
  a: "a",
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

//
obj.getThis();

// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
obj.getThis.call(a);

// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
obj.getThis2();

// {getThis: ƒ, getThis2: ƒ, getThis3: ƒ, getThis4: ƒ}
obj.getThis2.call(a);

// {a: 'a'}
obj.getThis3();

// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
obj.getThis4();

// -------------

let person = {
  name: "Jay",
  greet: function () {
    console.log("hello, " + this.name);
  },
};

person.greet(); // hello, Jay

let greet = person.greet;
greet(); // hello,

// -------------

let name = "Jay Global";
let person = {
  name: "Jay Person",
  details: {
    name: "Jay Details",
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // Jay Details
console.log(person.print()); // Jay Person

let name1 = person.print;
let name2 = person.details;

console.log(name1()); // ""
console.log(name2.print()); // error

// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = "inner";
    console.log(n);
  };
  return innerFn;
};

outerFn()();

// Uncaught ReferenceError: innerItem is not defined

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log("this inside of outerFn double()");
    console.log(this);
    return this.data.map(function (item) {
      console.log(this); //
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log("this inside of outerFn doubleArrow()");
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); //
      return item * 2;
    });
  },
};

object.double(); // this inside of outerFn double()
// {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
//  [2, 4, 6]

object.doubleArrow(); // this inside of outerFn doubleArrow()
// {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
// {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
// {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
// {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
// [2, 4, 6]

// --------------

let bobObj = {
  name: "Bob",
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // Bob

// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // 2

// --------------

const call = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // Hey, mom just called.

// -----------------

const call = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;

newCall(); // Hey, undefined just called.

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: "mom",
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller;

newCall(); // undefined called, too!
