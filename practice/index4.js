function createUser(name, score = 0) {
  let user = Object.create(createUser.prototype);

  user.name = name;
  user.score = score;

  return user;
}

createUser.prototype = {
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

let user1 = createUser("sweety", 10);
let user2 = createUser("sunny");

console.group(user1.name);
console.log(user1.name);
console.log(user1.score);
console.log("score", user1.increaseScore(20));
console.log("score", user1.decreseScore(2));
console.groupEnd();

console.group(user2.name);
console.log(user2.name);
console.log(user2.score);
console.log("score", user2.increaseScore(20));
console.log("score", user2.decreseScore(2));
console.groupEnd();
