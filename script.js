"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Select Elements

//-----------------

// documentElement will be used to select any element on the webpage, ex if we want to apply css to the

// entire page we need to select documentElement

console.log(document.documentElement);

// we can also select doucment.head or document.body without selectors ex: (querySelector)

console.log(document.head);

console.log(document.body);

// but with any other element we need to use a selector

// when we use a selector it will return the first element found

const header = document.querySelector(".header");

// if you need t o select all the elements use querySelectorAll => node (object)

console.log(document.querySelectorAll(".section"));

console.log(document.getElementById("section--1"));

// getElementsByTagName is the live version after the DOM is updated  (HTMLCollection: the most updated version) for example

// this is different with nodeList (doesn't update itself)

const allBtns = document.getElementsByTagName("button"); // returns HTMLCollection

console.log(allBtns);

console.log(document.getElementsByClassName("btn")); // returns HTMLCollection

// Creating and inserting elements

//---------------------------------

// ex: .insertAdjecentHTML

// element.insertAdjacentHTML(position, html)

// afterbegin After the beginning of the element (first child)

// afterend After the element

// beforebegin  Before the element

// beforeend  Before the end of the element (last child)

const myH2 = document.querySelector(".section__description");

let myP = "<p>this is the inserted p </p>";

myH2.insertAdjacentHTML("afterend", myP);

// create an element ex: div

const message = document.createElement("div"); // return a DOM element

// adding a class to our div

message.classList.add("cookie-message");

// add text using textContent or innerHTML

// message.textContent = ' We use cookies to improve our functionalities ';

message.innerHTML =
  ' We use cookies to improve our functionalities <button class="btn btn--close-cookie">Got it</button>';

//The Element.prepend() method inserts a set of Node objects or strings as the first child.

// The Element.append() method inserts a set of Node objects or strings as the last child.

// let div = document.createElement("div");

//let p = document.createElement("p");

//let span = document.createElement("span");

//div.append(p);

//div.prepend(span);

//console.log(div.childNodes); // NodeList [ <span>, <p> ]

// Can use append and prepend to create and move elements

// header.prepend(message);

// can clone an element using cloneNode

// header.append(message.cloneNode(true));

header.append(message);

// before() and after() are 2 methods to present the element before or after another element

header.before(message);

header.after(message);

// remove() element => deletes it

document

  .querySelector(".btn--close-cookie")

  .addEventListener("click", function () {
    message.remove();

    // before remove() it was done this way => message.parentElement.removeChild(message);
  });
