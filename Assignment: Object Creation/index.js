// Without object

// data for user

let title = "Where is the capital of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex = 1;

// method for user

function isAnswerCorrect(index) {
  if (index === correctAnswerIndex) {
    return true;
  } else {
    return false;
  }
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// Organize using object

let data = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,

  isAnswerCorrect(index) {
    if (index === data.correctAnswerIndex) {
      return true;
    } else {
      return false;
    }
  },

  getCorrectAnswer() {
    return data.options[data.correctAnswerIndex];
  },
};

// Use a function to create object

function createQuestion(title, options, correctAnswerIndex) {
  let question = {};

  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;

  question.isAnswerCorrect = function (index) {
    if (index === question.correctAnswerIndex) {
      return true;
    } else {
      return false;
    }
  };

  question.getCorrectAnswer = function () {
    return question.options[question.correctAnswerIndex];
  };
  return question;
}

// Convert the function to use this keyword

function createQuestion(title, options, correctAnswerIndex) {
  let question = {};

  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;

  question.isAnswerCorrect = function (index) {
    if (index === this.correctAnswerIndex) {
      return true;
    } else {
      return false;
    }
  };

  question.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  return question;
}

let first = createQuestion(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
