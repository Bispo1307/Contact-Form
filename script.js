const form = document.getElementById("form");
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const radios = document.querySelectorAll('input[name="query"]');
const radioGroup = document.querySelector(".input-field-query");
const radioError = radioGroup.querySelector("small");
const inputTextArea = document.getElementById("message");
const inputCheckbox = document.getElementById("check");
const modalSuccess = document.querySelector(".modal-success");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = checkForm();

  if (!isValid) {
    modalSuccess.classList.remove("show");
  } else {
    modalSuccess.classList.add("show");

    setTimeout(() => {
      modalSuccess.classList.remove("show");
    }, 5000);

    form.reset();
  }
});

function checkForm() {
  let isValid = true;

  if (
    !checkFirstName() ||
    !checkLastName() ||
    !checkEmail() ||
    !checkQuery() ||
    !checkMessage() ||
    !checkCheckbox()
  ) {
    isValid = false;
  }

  return isValid;
}

inputFirstName.addEventListener("input", checkFirstName);

function checkFirstName() {
  const valueFirstName = inputFirstName.value.trim();
  const formItem = inputFirstName.parentElement;

  if (valueFirstName === "") {
    formItem.classList.add("error");
    return false;
  } else {
    formItem.classList.remove("error");
    return true;
  }
}

inputLastName.addEventListener("input", checkLastName);

function checkLastName() {
  const valueLastName = inputLastName.value.trim();
  const formItem = inputLastName.parentElement;

  if (valueLastName === "") {
    formItem.classList.add("error");
    return false;
  } else {
    formItem.classList.remove("error");
    return true;
  }
}

inputEmail.addEventListener("input", checkEmail);

function checkEmail() {
  const valueEmail = inputEmail.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const formItem = inputEmail.parentElement;

  if (valueEmail === "" || !regexEmail.test(valueEmail)) {
    formItem.classList.add("error");
    return false;
  } else {
    formItem.classList.remove("error");
    return true;
  }
}

radios.forEach((r) => r.addEventListener("change", checkQuery));

function checkQuery() {
  let isChecked = false;

  radios.forEach((radio) => {
    if (radio.checked) isChecked = true;
  });

  if (!isChecked) {
    radioGroup.classList.add("error");
    radioError.style.display = "block";
    return false;
  } else {
    radioGroup.classList.remove("error");
    radioError.style.display = "none";
    return true;
  }
}

inputTextArea.addEventListener("input", checkMessage);

function checkMessage() {
  const valueTextArea = inputTextArea.value.trim();
  const formItem = inputTextArea.parentElement;

  if (valueTextArea === "") {
    formItem.classList.add("error");
    return false;
  } else {
    formItem.classList.remove("error");
    return true;
  }
}

inputCheckbox.addEventListener("change", checkCheckbox);

function checkCheckbox() {
  const formItem = inputCheckbox.parentElement;
  if (!inputCheckbox.checked) {
    formItem.classList.add("error");
    return false;
  } else {
    formItem.classList.remove("error");
    return true;
  }
}
