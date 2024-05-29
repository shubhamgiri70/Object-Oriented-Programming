let userMethods = {
  increaseScore: function (value = 1) {
    this.score = this.score + value;
    return this.score;
  },
  decreseScore: function (value = 1) {
    this.score = this.score - value;
    return this.score;
  },
  changeName: function (name) {
    this.name = name;
    return this.name;
  },
};

function createUser(name, score = 0) {
  let user = Object.create(userMethods);

  user.name = name;
  user.score = score;

  return user;
}

let user1 = createUser("sweety", 10);
let user2 = createUser("sunny");
