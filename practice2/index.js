let userMethods = {
  increaseScore: function (value = 1) {
    this.score = this.score + value;
    return this.score;
  },
  decreaseScore: function (value = 1) {
    this.score = this.score - value;
    return this.score;
  },
  changeName: function (name) {
    this.name = name;
    return this.name;
  },
};

let paidUserMethods = {
  redeemBalance: function (amount) {
    if (this.balance < amount) {
      alert(`Not enough Balance`);
      return;
    }
    this.balance = this.balance - amount;
    alert(`Your updated balance is ${this.balance}`);
  },
};

Object.setPrototypeOf(paidUserMethods, userMethods);

function createUser(name, score = 0) {
  let user = Object.create(userMethods);
  user.name = name;
  user.score = score;

  return user;
}

function createPaidUser(name, score = 0, balance = 0) {
  let user = Object.create(paidUserMethods);
  user.name = name;
  user.score = score;
  user.balance = balance;
  return user;
}

let user1 = createUser("sameer", 10);
let user2 = paidUserMethods("arya", 30, 100);

// pseudoclassical pattern

function CreateUser(name, score = 0) {
  this.name = name;
  this.score = score;
}

CreateUser.prototype = {
  increaseScore: function (value = 1) {
    this.score = this.score + value;
    return this.score;
  },
  decreaseScore: function (value = 1) {
    this.score = this.score - value;
    return this.score;
  },
  changeName: function (name) {
    this.name = name;
    return this.name;
  },
};

function CreatePaidUser(name, score = 0, balance = 0) {
  CreateUser.apply(this, [name, score]);
  this.balance = balance;
}

CreatePaidUser.prototype.redeemBalance = function (amount) {
  if (this.balance < amount) {
    alert(`Not enough Balance`);
    return;
  }
  this.balance = this.balance - amount;
  alert(`Your updated balance is ${this.balance}`);
};

Object.setPrototypeOf(CreatePaidUser.prototype, CreateUser.prototype);

let user1 = new CreateUser("sameer", 10);
let user2 = new CreatePaidUser("arya", 30, 100);

// using class

class User {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }
  increaseScore(value = 1) {
    this.score = this.score + value;
    return this.score;
  }
  decreaseScore(value = 1) {
    this.score = this.score - value;
    return this.score;
  }
  changeName(name) {
    this.name = name;
    return this.name;
  }
}

class PaidUser extends User {
  constructor(name, score = 0, balance = 0) {
    // CreateUser.apply(this, [name, score]);
    super(name, score);
    this.balance = balance;
  }
  redeemBalance(amount) {
    if (this.balance < amount) {
      alert(`Not enough Balance`);
      return;
    }
    this.balance = this.balance - amount;
    alert(`Your updated balance is ${this.balance}`);
  }
}

let user1 = new User("sameer", 10);
let user2 = new PaidUser("arya", 30, 100);
