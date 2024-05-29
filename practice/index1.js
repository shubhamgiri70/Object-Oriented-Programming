function createUser(name, score = 0) {
  let user = {};

  user.name = name;
  user.score = score;
  user.increaseScore = function (value = 1) {
    this.score = this.score + value;
    return this.score;
  };
  user.decreseScore = function (value = 1) {
    this.score = this.score - value;
    return this.score;
  };
  user.changeName = function (name) {
    this.name = name;
    return this.name;
  };
  return user;
}

let user1 = createUser("sweety", 10);
let user2 = createUser("sunny");
