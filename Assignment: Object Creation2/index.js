// factory pattern of creating object

function question(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;

  question.isAnswerCorrect = function (index) {
    return correctAnswerIndex === index;
  };
  question.getCorrectAnswer = function () {
    return options[correctAnswerIndex];
  };

  return question;
}

// prototypal pattern

let questionMethod = {
  isAnswerCorrect: function (index) {
    return correctAnswerIndex === index;
  },
  getCorrectAnswer: function () {
    return options[correctAnswerIndex];
  },
};

function question(title, options, correctAnswerIndex) {
  let question = Object.create(questionMethod);
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;

  return question;
}

// pseudoclassical Pattern

function Question(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

Question.prototype = {
  isAnswerCorrect: function (index) {
    return this.correctAnswerIndex === index;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
};

// class pattern

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return this.correctAnswerIndex === index;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

let firstQuestion = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amman", "Kuwait City", "Nairobi"],
  1
);

let secondQuestion = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amman", "Kingston", "Nairobi"],
  2
);

// Test the first question
console.log(firstQuestion.title); // "Where is the capital of Jordan"
console.log(firstQuestion.isAnswerCorrect(1)); // true
console.log(firstQuestion.isAnswerCorrect(0)); // false
console.log(firstQuestion.getCorrectAnswer()); // "Amman"

// Test the second question
console.log(secondQuestion.title); // "Where is the capital of Jamaica"
console.log(secondQuestion.isAnswerCorrect(2)); // true
console.log(secondQuestion.isAnswerCorrect(0)); // false
console.log(secondQuestion.getCorrectAnswer()); // "Kingston"
