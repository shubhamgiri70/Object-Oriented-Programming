// Using function to create object

function createUser(name, id, noOfProject) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProject = noOfProject;

  user.getProjects = function () {
    return user.noOfProject;
  };
  user.changeName = function (newName) {
    let previousName = user.name;
    user.name = newName;
    return previousName;
  };
  user.incrementProject = function () {
    user.noOfProject += 1;
    return user.noOfProject;
  };
  user.decrementProject = function () {
    user.noOfProject -= 1;
    return user.noOfProject;
  };

  return user;
}

//  Using Object.create (prototypal pattern)

let userMethod = {
  getProjects: function () {
    return this.noOfProject;
  },
  changeName: function (newName) {
    let previousName = this.name;
    this.name = newName;
    return previousName;
  },
  incrementProject: function () {
    this.noOfProject += 1;
    return this.noOfProject;
  },
  decrementProject: function () {
    this.noOfProject -= 1;
    return this.noOfProject;
  },
};

function createUser(name, id, noOfProject) {
  let user = Object.create(userMethod);
  user.name = name;
  user.id = id;
  user.noOfProject = noOfProject;

  return user;
}

//  Using Pseudoclassical Way

CreateUser.prototype = {
  getProjects: function () {
    return this.noOfProject;
  },
  changeName: function (newName) {
    let previousName = this.name;
    this.name = newName;
    return previousName;
  },
  incrementProject: function () {
    this.noOfProject += 1;
    return this.noOfProject;
  },
  decrementProject: function () {
    this.noOfProject -= 1;
    return this.noOfProject;
  },
};

function CreateUser(name, id, noOfProject) {
  this.name = name;
  this.id = id;
  this.noOfProject = noOfProject;
}

// Using Class

class CreateUser {
  constructor(name, id, noOfProject) {
    this.name = name;
    this.id = id;
    this.noOfProject = noOfProject;
  }

  getProjects() {
    return this.noOfProject;
  }
  changeName(newName) {
    let previousName = this.name;
    this.name = newName;
    return previousName;
  }
  incrementProject() {
    this.noOfProject += 1;
    return this.noOfProject;
  }
  decrementProject() {
    this.noOfProject -= 1;
    return this.noOfProject;
  }
}

const user1 = new CreateUser("Sunny", "sunny@3", 3);
const user2 = new CreateUser("Sweety", "sweety@4", 4);

console.group("user1");
console.log(user1.name);
console.log(user1.id);
console.log(user1.incrementProject());
console.log(user1.decrementProject());
console.log(user1.changeName("Shubham"));
console.log(user1.name);
console.groupEnd();

console.group("user2");
console.log(user2.name);
console.log(user2.id);
console.log(user2.incrementProject());
console.log(user2.decrementProject());
console.log(user2.changeName("Shalini"));
console.log(user2.name);
console.groupEnd();
