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

  if (isValid) {
    modalSuccess.classList.add("show");

    setTimeout(() => {
      modalSuccess.classList.remove("show");
    }, 5000);

    form.reset();
  }
});

function checkForm() {
  let isValid = true;

  //   FIRST NAME
  const valueFirstName = inputFirstName.value.trim();

  if (valueFirstName === "") {
    const formItem = inputFirstName.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputFirstName.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }

  //   LAST NAME
  const valueLastName = inputLastName.value.trim();

  if (valueLastName === "") {
    const formItem = inputLastName.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputLastName.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }

  //   EMAIL
  const valueEmail = inputEmail.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (valueEmail === "" || !regexEmail.test(valueEmail)) {
    const formItem = inputEmail.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputEmail.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }

  //   RADIO
  let isChecked = false;
  radios.forEach((radio) => {
    if (radio.checked) isChecked = true;
  });

  if (!isChecked) {
    radioGroup.classList.add("error");
    radioError.style.display = "block";
    isValid = false;
  } else {
    radioGroup.classList.remove("error");
    radioError.style.display = "none";
    isValid = true;
  }

  //   MESSAGE
  const valueTextArea = inputTextArea.value.trim();

  if (valueTextArea === "") {
    const formItem = inputTextArea.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputTextArea.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }

  //   CHECKBOX
  if (!inputCheckbox.checked) {
    const formItem = inputCheckbox.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputCheckbox.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }

  return isValid;
}

inputFirstName.addEventListener("blur", () => {
  checkFirstName();
});

function checkFirstName() {
  const valueFirstName = inputFirstName.value.trim();

  if (valueFirstName === "") {
    const formItem = inputFirstName.parentElement;
    formItem.classList.add("error");
  } else {
    const formItem = inputFirstName.parentElement;
    formItem.classList.remove("error");
  }
}

inputLastName.addEventListener("blur", () => {
  checkLastName();
});

function checkLastName() {
  const valueLastName = inputLastName.value.trim();

  if (valueLastName === "") {
    const formItem = inputLastName.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputLastName.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }
}

inputEmail.addEventListener("input", () => {
  checkEmail();
});

function checkEmail() {
  const valueEmail = inputEmail.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (valueEmail === "" || !regexEmail.test(valueEmail)) {
    const formItem = inputEmail.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputEmail.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }
}

radioError.addEventListener("click", () => {
  checkQuery();
});

function checkQuery() {
  let isChecked = false;
  radios.forEach((radio) => {
    if (radio.checked) isChecked = true;
  });

  if (!isChecked) {
    radioGroup.classList.add("error");
    radioError.style.display = "block";
    isValid = false;
  } else {
    radioGroup.classList.remove("error");
    radioError.style.display = "none";
    isValid = true;
  }
}

inputTextArea.addEventListener("blur", () => {
  checkMessage();
});

function checkMessage() {
  const valueTextArea = inputTextArea.value.trim();

  if (valueTextArea === "") {
    const formItem = inputTextArea.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputTextArea.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }
}

inputCheckbox.addEventListener("blur", () => {
  checkCheckbox();
});

function checkCheckbox() {
  if (!inputCheckbox.checked) {
    const formItem = inputCheckbox.parentElement;
    formItem.classList.add("error");
    isValid = false;
  } else {
    const formItem = inputCheckbox.parentElement;
    formItem.classList.remove("error");
    isValid = true;
  }
}
