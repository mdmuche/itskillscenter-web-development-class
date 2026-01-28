const btn = document.querySelector("button");
const form = document.querySelector("#form-btn");
const inputEnter = document.getElementById("input-enter");
const addTask = document.getElementById("add-task");
const formContainer = document.getElementById("form-container");
const err = document.getElementById("err");
const errClose = document.getElementById("err-close");
const input = document.getElementsByClassName("input");

const inputFieldArr = [
  "name",
  "age",
  "school",
  "date",
  "address",
  "email",
  "password",
  "submit",
];

function createNewField() {
  const field = inputEnter.value.trim().toLowerCase();
  // create a new input element;
  // loop over array and check if the values entered in input field matches the inputFieldArr values

  // show error message
  // if user enter an invalid input
  if (!inputFieldArr.includes(field)) {
    err.style.display = "block";
    formContainer.style.opacity = 0.2;
    return;
  }

  // if an input field already exists
  if (form.querySelector(`#${field}`)) {
    err.style.display = "block";
    formContainer.style.opacity = 0.2;
    return;
  }

  const newInput = document.createElement("input");

  newInput.type = field === "age" ? "number" : field;
  newInput.placeholder = `enter your ${field}`;
  newInput.className = "input";
  newInput.id = field;

  form.appendChild(newInput);

  // cleanup
  inputEnter.value = "";
  err.style.display = "none";
}

errClose.addEventListener("click", () => {
  // hide error msg
  err.style.display = "none";
  formContainer.style.opacity = 1;
  // clear input field(s)
  inputEnter.value = "";
});

btn.addEventListener("click", createNewField);
