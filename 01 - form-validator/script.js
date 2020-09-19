/**
 * BETTER COMMENTS TEMPLATE
 * * Titles
 * @param myParam
 * ! Review code
 * ? Questions
 * TODO: "tasks to todo"
 * // Deprecated
 */

/**
 * * FORM VALIDATOR
 */

//* Document selectors

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/**
 * *Show Error Outline Function
 * @param input
 * @param message
 * */

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error"; // * renombramos la clase de form-control
  small.innerText = message;
}

/**
 * * Show Success Outline Function
 * @param input
 * */

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

/**
 * * Check Required Fields Function
 * @param inputArr
 * */

function checkRequired(inputArr) {
  //? bucle para recorrer el array de inputs

  //for (let input = 0; input < inputArr.length; input++) {
  // console.log(inputArr[input]);
  // }

  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

/**
 * * Get Field Name Function
 * @param input
 * */

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/**
 * * EVENT LISTENERS
 * */

form.addEventListener("click", function (event) {
  event.preventDefault();

  // * llamamos a la funcion de validacion que acepta un array de inputs

  checkRequired([username, email, password, password2]);
});
