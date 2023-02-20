const facts = [
  {
    statement: "Tamal es un bb?",
    answer: "true",
    explanation:
      "Efectivamente tamal es un bby",
  },
  {
    statement: "Yuri es ENFPT-T??",
    answer: "true",
    explanation:
      "Yuri es la persona mas ENFP-T que hay",
  },
  {
    statement: "JavaScript was invented in 1995",
    answer: "true",
    explanation: "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days."
  },
  {
    statement: "Strings in JS are editable values",
    answer: "false",
    explanation: "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings."
  },
  {
    statement: "1 + 1 === 2",
    answer: "true",
    explanation: "The plus operator gives the sum of two numbers."
  },
  {
    statement: "'1' + '1' === '2'",
    answer: "false",
    explanation: "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'."
  },
  {
    statement: "typeof ['J', 'S'] === 'array'",
    answer: "false",
    explanation: "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties."
  },
  {
    statement: "'1' + '1' === '2'",
    answer: "false",
    explanation:
      "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'.",
  },
];

const disable = (button) => {
  button.setAttribute("disabled", "");
  button.classList.add("disabled");
};
const enable = (button) => {
  button.removeAttribute("disabled");
  button.classList.remove("disabled");
};

let fact
let correct = 0
let completed = 0

const statement = document.querySelector("#statement");

const optionButtons = document.querySelectorAll("#option-button");

const nextQuestion = document.querySelector("#next-question")

const explanation = document.querySelector("#explanation");

const nextFact = () => {
  fact = facts.shift(); // get the first fact in our array (shortening the array)
  statement.textContent = fact.statement;
  explanation.classList.add("hidden")

  for (let button of optionButtons) {
    button.classList.remove("correct")
    button.classList.remove("incorrect")
    enable(button)
  }

  disable(nextQuestion)
}

nextQuestion.addEventListener("click", nextFact);

for (let button of optionButtons) {
  button.addEventListener("click", (event) => {

    for (disableButton of optionButtons) {
      disable(disableButton)
    }

    if (facts.length > 0) {
      enable(nextQuestion)
    } else {
      nextQuestion.textContent = "No more questions! :c"

    }

    const guess = event.target.value

    if (guess === fact.answer) {
      event.target.classList.add("correct")
      correct += 1
    } else {
      event.target.classList.add("incorrect")
    }

    explanation.textContent = fact.explanation
    explanation.classList.remove("hidden")

    completed += 1
    document.querySelector("#correct").textContent = correct
    document.querySelector("#completed").textContent = completed

  })
}

nextFact();
