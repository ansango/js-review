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
 * * Check Input Length Function
 * @param input
 * @param min
 * @param max
 * */

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

/**
 * * Check Email Function
 * @param input
 * */

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

/**
 * * Check Password Function
 * @param input1
 * @param input2
 * */

function checkValidPasswordsMatch(input1, input2) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
  if (!re.test(input1.value.trim())) {
    showError(input1, "Must be lower, upper case and special char");
  } else if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
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

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkValidPasswordsMatch(password, password2);
});
