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
