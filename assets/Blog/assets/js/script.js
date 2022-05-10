'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// FORMS VALIDATION

let form = document.getElementsByClassName("contact__form");
const username = document.getElementById("nameId");
const email = document.getElementById("emailId");
const password = document.getElementById("passwordId");
const messageInput = document.getElementById("messageId");
const submitBtn = document.getElementById("submitBtn");

const errorMsg = document.getElementsByClassName("error");


// Adding the submit event Listener

form.addEventListener("submit", () => {
  console.log("hello")
});

// engine function which will do all the works

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

  }
};
