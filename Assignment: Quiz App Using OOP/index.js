let form = document.querySelector("form");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let showResult = document.querySelector(".show_result");
let quizEle = document.querySelector(".quiz");
let totalQue = document.querySelector("header p");

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer) {
    return this.options[this.correctAnswerIndex] === answer;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

class Quiz {
  constructor(questions = [], score = 0) {
    this.questions = questions;
    this.score = score;
    this.activeIndex = 0;
  }

  incrementScore() {
    this.score = this.score + 1;
  }

  nextQuestion() {
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }

  previousQuestion() {
    this.activeIndex = this.activeIndex - 1;
    this.createUI();
  }

  addQuestion(title, options, answerIndex) {
    let question = new Question(title, options, answerIndex);
    this.questions.push(question);
  }

  handleButtons() {
    if (this.activeIndex === 0) {
      prev.style.visibility = "hidden";
    } else if (this.activeIndex === this.questions.length - 1) {
      next.style.visibility = "hidden";
      showResult.style.visibility = "visible";
    } else {
      prev.style.visibility = "visible";
      next.style.visibility = "visible";
    }
  }

  createUI() {
    quizEle.innerText = "";
    let activeQuestion = this.questions[this.activeIndex];
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    fieldset.name = "radio";
    let legend = document.createElement("legend");
    legend.innerText = activeQuestion.title;
    let optionEle = document.createElement("div");
    optionEle.classList.add("options");
    let buttonWraper = document.createElement("div");
    let button = document.createElement("button");
    button.innerText = "Submit";
    button.type = "submit";
    buttonWraper.append(button);

    activeQuestion.options.forEach((option, index) => {
      let div = document.createElement("div");
      let input = document.createElement("input");
      input.id = `option-${index}`;
      input.type = "radio";
      input.name = "options";
      input.value = option;
      let label = document.createElement("label");
      label.for = `option-${index}`;
      label.innerText = option;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input.checked) {
          if (activeQuestion.isCorrect(input.value)) {
            this.incrementScore();
          }
        }
      });
      div.append(input, label);
      optionEle.append(div);
    });

    this.handleButtons();
    totalQue.innerText = `Total Question: ${this.questions.length}`;
    fieldset.append(legend, optionEle, buttonWraper);
    form.append(fieldset);
    quizEle.append(form);
  }
}

let quiz = new Quiz();

quizCollection.forEach((question) => {
  quiz.addQuestion(question.title, question.options, question.answerIndex);
});
quiz.createUI();

prev.addEventListener("click", quiz.previousQuestion.bind(quiz));
next.addEventListener("click", quiz.nextQuestion.bind(quiz));
