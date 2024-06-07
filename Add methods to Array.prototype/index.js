Array.prototype.myMap = function (cb) {
  let final = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    final.push(cb(element, i, this));
  }
  return final;
};

// Test the myMap function you created above

let numbers = [1, 5, 6, 8, 9];
let words = "quick brown fox jumped over a lazy dog".split(" ");
let doubleNum = numbers.myMap(function (num) {
  return num * 2 - 1;
});

let capitalWords = words
  .myMap(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(" ");
console.log(doubleNum); // it should be [1, 9, 11, 15, 17]
console.log(capitalWords); // it should be 'Quick Brown Fox Jumped Over A Lazy Dog'

Array.prototype.myFilter = function (cb) {
  let final = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (cb(element, i, this)) {
      final.push(element);
    }
  }
  return final;
};

// Test the myMap function you created above
let numbers = [1, 5, 6, 8, 9];
let words = "quick brown fox jumped over a lazy dog".split(" ");

let even = numbers.myFilter(function (num) {
  return num % 2 === 0;
});

let filteredWords = words
  .myFilter(function (word) {
    return word.length > 3;
  })
  .join(" ");
console.log(even); // it should be [6, 8]
console.log(filteredWords); // it should be 'quick brown jumped over lazy';

Array.prototype.shuffle = function () {
  return [...this].sort(() => Math.random() - 0.5);
};

// Test to check the shuffle method (It will return different output every time you call)
console.log(numbers.shuffle());
console.log(numbers.shuffle());
console.log(words.shuffle());
console.log(words.shuffle());

Array.prototype.unique = function () {
  return this.reduce((acc, cv) => {
    if (!acc.includes(cv)) {
      acc.push(cv);
    }
    return acc;
  }, []);
};

// Test to check the shuffle method (It will return different output every time you call)
let num = [1, 2, 3, 4, 2, 3, 6, 7, 7];
let strings = "helloworld".split("");

console.log(num.unique()); // [1, 2, 3, 4, 6, 7]
console.log(strings.unique()); // ['h', 'e', 'l', 'o', 'w', 'r', 'd']

Array.prototype.intersection = function (arr) {
  return this.reduce((acc, cv) => {
    if (arr.includes(cv)) {
      acc.push(cv);
    }
    return acc;
  }, []).unique();
};

// Test to check the shuffle method (It will return different output every time you call)
console.log(num.intersection([2, 7, 11, 32])); // [2, 7]
console.log(strings.intersection("heyworld".split(""))); // ['h', 'e', 'o', 'w', 'r', 'l', 'd']

Array.prototype.chunk = function (size = 1) {
  let arr = [...this];
  let len = Math.floor(arr.length / size);
  let final = [];
  for (let i = 0; i <= len; i++) {
    let chunk = arr.splice(0, size);
    final.push(chunk);
  }
  return final;
};

// Test to check the shuffle method (It will return different output every time you call)
console.log(num.chunk(2)); // [[1, 2], [3, 4], [2, 3], [6, 7], [7]]
console.log(num.chunk()); // [[1], [2], [3], [4], [2], [3], [6], [7], [7]]
console.log(strings.chunk(3)); // [['h', 'e', 'l'], ['l', 'o', 'w'], ['o', 'r', 'l'], ['d']]
