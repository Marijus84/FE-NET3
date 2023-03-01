//! get Form and Elements object from DOM
// console.dir(document.querySelector("form"));
// console.dir(document.forms[0]);

// console.dir(document.forms[0].elements);

// console.dir(document.forms[0].elements[0]);
// console.dir(document.forms[0].username);

//! get values on submit
const form = document.forms[0];
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  //   console.dir(event.target);

  //! input values - same thing, different description
  //   console.dir(form.username.value);
  //   console.dir(event.target.username.value);
  //   console.dir(document.querySelector("#username").value);

  //! select
  //   console.dir(form.hometown.value);
  //   console.dir(form.hometown.selectedIndex);
  //   console.dir(form.hometown.selectedOptions);

  //! checkbox
  //   console.dir(form.terms);
  //   console.dir(form.terms.checked);

  const username = event.target.username;
  const email = event.target.email;
  const password = event.target.password;
  const hometown = event.target.hometown;
  const errorElements = document.querySelectorAll(".error");

  const validateInput = (inputElement, index, message) => {
    if (inputElement.value === "") {
      inputElement.style.border = "2px solid red";
      errorElements[index].textContent = message + "is not valid";
    } else {
      inputElement.style.border = "2px solid lightgrey";
      errorElements[index].textContent = "";
    }
  };

  validateInput(username, 0, "username ");
  validateInput(email, 1, "email ");
  validateInput(password, 2, "password ");
  validateInput(hometown, 3, "hometown ");
}

//! focus and blur
// document.querySelector("#username").addEventListener("focus", (e) => {
//   e.target.style.backgroundColor = "orange";
// });

// document.querySelector("#username").addEventListener("blur", (e) => {
//   e.target.style.backgroundColor = "white";
// });

//! change and input events
// document.querySelector("#email").addEventListener("change", (e) => {
//   document.querySelector("#emailError").textContent = e.target.value;
// });

// document.querySelector("#username").addEventListener("input", (e) => {
//   document.querySelector("#usernameError").textContent = e.target.value;
// });

//? Task 1:
//? Sukurti dar vieną input field, kad vartotojas pakartotinai suvestų
//? password. Jei slaptažodžiai nesutampa, tai po antru slaptažodžiu
//? atsiranda klaidos pranešimas, kad Passwords don't match;
