class User {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }

  increaseScore(value = 1) {
    this.score = this.score + value;
    return this.score;
  }

  decreseScore(value = 1) {
    this.score = this.score - value;
    return this.score;
  }

  changeName(name) {
    this.name = name;
    return this.name;
  }
}

let user1 = new User("sweety", 10);
let user2 = new User("sunny");

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
