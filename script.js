"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Select Elements
//-----------------
// documentElement will be used to select any element on the webpage, ex if we want to apply css to the
// entire page we need to select documentElement
// console.log(document.documentElement);
// we can also select doucment.head or document.body without selectors ex: (querySelector)
// console.log(document.head);
// console.log(document.body);
// but with any other element we need to use a selector
// when we use a selector it will return the first element found
const header = document.querySelector(".header");
// if you need t o select all the elements use querySelectorAll => node (object)
// console.log(document.querySelectorAll(".section"));
// console.log(document.getElementById("section--1"));
// getElementsByTagName is the live version after the DOM is updated  (HTMLCollection: the most updated version) for example
// this is different with nodeList (doesn't update itself)
const allBtns = document.getElementsByTagName("button"); // returns HTMLCollection
// console.log(allBtns);
// console.log(document.getElementsByClassName("btn")); // returns HTMLCollection

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
  .addEventListener("click", function() {
    message.remove();
    // before remove() it was done this way => message.parentElement.removeChild(message);
  });

// custome property
//------------------
// this styling will be inline style after execution
// if for any reason need to read the tyle, canot read except the inline style we setted like these examples
// message.style.backgroundColor = "red";
// message.style.width = "120%";

// console.log(message.style.backgroundColor); // red
// but cannot get a style inside a class

// we can get any style just by using getComputedStyle()
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// parseFloat the number getComputedStyle for the height to get the number out of this (xx.xx px)
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// set property
// -------------
// change a property
document.documentElement.style.setProperty("--color-primary", "orangered");

// attributes
//------------
const logo = document.querySelector(".nav__logo");
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);

// Non standard attributes
//-------------------------

// if you added a new non standard attribute like desinger
// console.log(logo.designer);
// we can get read any attribute even if non standard by using getAttribute() method
// console.log(logo.getAttribute("designer"));

// we acn also set attributes by using setAttribute for non standard attributes

logo.setAttribute("designer", "omar");

// console.log(logo.getAttribute("designer"));
// but for standard attributes can be using setAttributes or like this
// console.log(logo.alt);
logo.alt = "This Bankist logo";
// console.log(logo.alt);
logo.setAttribute("alt", "This is Bankist logo");
// console.log(logo.alt);

// this is the absolute address
// console.log(logo.src);
// this is the relative address
// console.log(logo.getAttribute("src"));

//href
//
const link = document.querySelector(".nav__link--btn");
// this is the absolute link
// console.log(link.href);
// this is the link written in HTML which is #
// console.log(link.getAttribute("href"));

// data attribute
//---------------
// it has to start with data-AnythingWeWant
// dataset is used . camelCase the name as follows on the logo section
// console.log(logo.dataset.versionNumber);

// classes
//----------

logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes

// don't use this one as this is over write all the existing classes by this one, best is to use add()
logo.classList = "blabbla";

// ScrollTo

//---------

const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function(e) {
  e.preventDefault();

  // get coordinates of an element using getBoundingClinetRect()

  const s1cords = section1.getBoundingClientRect();
  // console.log(s1cords);

  // get the  coordinates of e.target using getBoundingClientRect()

  // the getBoundingClientRect() is calculating the visual distance on the browser , it will change if scroll up or down

  // console.log(e.target.getBoundingClientRect());

  // get the current scroll window.pageXoffset and Yoffset

  // console.log(window.pageXOffset, window.pageYOffset);
  // read the height and width of view port

  // console.log(
  //   document.documentElement.clientWidth,
  //   document.documentElement.clientHeight
  // );

  // Solutions 1 - old school
  // scrolling to somewhere using scrollTo(horizontal, vertical)

  // adding the s1cords.top is not enough as it will be Ok if we are at the top of the page while if we scrolled

  // a bit down it will be different value as the  getBoundingClientRect() is meausing the actual visual position

  // the solution is to add the scrolled amount using window.pageYoffset value

  window.scrollTo(
    s1cords.left + window.pageXOffset,
    s1cords.top + window.pageYOffset
  );
  // to scroll smoothly pass an object to scrollTo({}) and add behavior: 'smooth' property
  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // solution 2 - Modern
  // using scrollIntoView({behavior: 'smooth'})

  // section1.scrollIntoView({ behavior: "smooth" });
});

// Events
//-------
// mouseenter event is live hover in css = onmouseenter , also similar to mouseover
// addEvenetListenere

const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", function(e) {
//   alert("addEvent Listner: You are doing mouseenter");
// });

// onevent ex: onclick, onmouseenter
// onevent ex: onmouseenter , onclick ..etc are old school similar handlers like the modern one addEventListener
// the advantage of addEVenetListener it allows us t o add more than 1 event while onevent handler doesn't do the same job

// h1.onmouseenter = function(e) {
//   alert("this is onmouseenter");
// };

// remove listerner or use to listen 1 time:
const firstBtn = document.querySelector(".btn--scroll-to");
// firstBtn.onclick = function (e) {
//   alert('this button is pressed');
// };

// create a seprate function to do the action on the desired element
// add the event listener to this element and call the function, then removeEvenetlistener() after in the function itself or after certain time
// const removeBtnListner = function (e) {
//   alert('this btn is pressed again');
//   firstBtn.removeEventListener('click', removeBtnListner);

// };
// firstBtn.addEventListener('click', removeBtnListner);
// setInterval(() => console.log('hi'), 1000);
// remove handler after certain time
const removeBtnListner = function(e) {
  alert("this btn is pressed again");
};

firstBtn.addEventListener("click", removeBtnListner);

setTimeout(
  () => firstBtn.removeEventListener("click", removeBtnListner),
  10000
);

// using HTML attributes
/* <button onClick='alert("a click")' class="btn--text btn--scroll-to">Learn more &DownArrow;</button> */

// Random colour
// rgb(255,255,255)

// random integer
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// random color
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor());

// propagation Bublbing
//---------------------

//capturing phase where the event propagates from the
// top to the target

// target phase where the event originated

// bubbling phase where the event propagates
// from the event phase till the top of the document

// when an event occurs in an element it propagates (bubbles) up the same effect to its parents till the top

// e.target => where the event happend (originated)
// e.currentTarget => where the handles is attached
// e.currentTarget === this word

document.querySelector(".nav__link").addEventListener("click", function(e) {
  // this.style.backgroundColor = randomColor();
  // console.log("link", e.target, e.currentTarget);
  // we can stop the event propagation bubbling
  // it stops the bubbling effect to the parents
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function(e) {
  // this.style.backgroundColor = randomColor();
  // console.log("links", e.target, e.currentTarget);
});

// by default eventListeners are listening to the events in the target phase and bubbling but not in the capturing phase however if we need to enable listening through capturing phase and disable it in bubbling phase we can set set the 3rd parameter in the listener to true as shown below, in this case the event will be generated from the nav (top) not from the element (child) => first element is nav not nav__link this means that the event is listening from the (capturing phase) down to the event not from the event up (bubbling phase)

// document.querySelector(".nav").addEventListener(
//   "click",
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log("nav", e.target, e.currentTarget);
//   },
//   true
// );

document.querySelector(".nav").addEventListener("click", function(e) {
  // this.style.backgroundColor = randomColor();
  // console.log("nav", e.target, e.currentTarget);
});

// page navigation
// event delegation
//-----------------

// document.querySelectorAll('.nav__link').forEach(elem =>
//   elem.addEventListener('click', function (e) {
//     e.preventDefault();
//     // smooth scrolling
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

// event delegation is to put the listener on a common parent element using the bubbling effect instead of copying the same behavior for each of them

// for example we will put the listener on the nav__links ul instead of nav__link li
// event.target is where the even is originated

// we need to apply 2 steps to apply event delegation
// 1. add event listener to common element
// 2. determine which element originated the event

document.querySelector(".nav__links").addEventListener("click", function(e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  if (e.target.classList.contains("nav__link")) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// DOM traversing
//----------------

// const h1 = document.querySelector("h1");

// going downwrads : child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// parent.children always works with direct children
// will gives us the children elements
// console.log(h1.children); // HTML collection is a live element => will change with any update

// first child
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = "red";

// last child
// h1.lastElementChild.style.color = "brown";

// going upwards : parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// the closest parent
// the closest parent with a class 'header' to h1
// h1.closest(".header").style.background = "var(--gradient-primary)";

// closest() is opposite to querySelector , querySelector finds the children no matter how deep in the DOM tree, while closest() finds parents also no matter how far up in the DOM tree
// h1.closest(".header").style.background = "var(--gradient-primary)";

// going sideways: siblings
// in JS we can only access direct siblings, previous and next elements

// for elements:
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// for nodes:
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// if need all the h1 siblings we can move to the parent and read all the children from there

// console.log(h1.parentElement.children);
// HTML collection is not an array but it is iretable and we can spread into an array

[...h1.parentElement.children].forEach(elem => {
  if (elem !== h1) elem.style.transform = "scale(1)";
});

// A tapped component
//-------------------
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function(e) {
  // use closest() to get the parent of an element but in case its is the element itself then it returns the element back

  // for example e.target.clicked.closest('.operations__tab') if the clicked e.target with the same class 'operations__tab' then => tab
  const clicked = e.target.closest(".operations__tab");

  //  if (clicked) {
  //    clicked.classList.add('operations__tab--active');
  //  }

  // use guard clause instead of the if statement above in case its not many conditions : in case not clicked return the function immediately
  // if clicked then continue the code execution
  if (!clicked) return;

  // in order to remove the effect of the actual active tab before applying it on the new clicked tab you need to remove the class from all before applying

  // it on the new tab
  // remove classes
  tabs.forEach(elem => elem.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  tabsContent.forEach(elem =>
    elem.classList.remove("operations__content--active")
  );

  // add classes
  // use dataset.tab = data.tab
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// passing arguments to event handler funcitions
//-----------------------------------------------
// menu fade animation
// mouseover is similar to mousenter , the big difference is that mouseenter does not bubble
// mouseleave is the opposite of mousenter
// mouseout is the opposite of mouseover
// transform the code to be DRY

const hovering = function(e) {
  e.preventDefault();
  // console.log("hovering", this, e.currentTarget);
  // this keyword is equal to currentTarget
  // console.log(e.currentTarget);

  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach(elem => {
      if (elem !== link) {
        elem.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

// const nav = document.querySelector('.nav');
// nav.addEventListener('mouseover', function (e) {
//   hovering(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   hovering(e, 1);
// });

// any handler function can not have except 1 parameter (argument) which is the event
// if we need to pass another argument in our handler this will be done by using the 'this' keyword using
// bind() method

// we can use so we cannot simply use hovering(e, 0.5) to be a handler function as in the addEventListener
// is expecting a function

// the bind methond creates a copy of the function that is it called on and it will set the 'this' keyword in

// function call to whatever value we pass into bind()

// we can use the bind() method to pass an array, object or value using the 'this' keyword

// bind() method is used to pass an argument into a handler , this argument is value, array or object

const nav = document.querySelector(".nav");
// 'this' value is set to 1
nav.addEventListener("mouseover", hovering.bind(0.5));
// 'this' value is set to 0.5
nav.addEventListener("mouseout", hovering.bind(1));

// Sticky navigation
//------------------
// solution 1
// scrollY solutions is not optimal
// It does the job but the performance is compromized

// scrollY or scrollX gets you the position of the scroll from the top of the window for Y and from the left of the window for X
// console.log(scrollY);
// // console.log(scrollX);
// const initialCords = section1.getBoundingClientRect();
// console.log(initialCords);

// window.addEventListener("scroll", function(e) {
//   e.preventDefault();
//   if (window.scrollY > initialCords.top)
//     document.querySelector(".nav").classList.add("sticky");
//   else document.querySelector(".nav").classList.remove("sticky");
// });

// solution 2
// using the intersection observer API
// ------------------------------------
// the inter section observer API is an API that observes the intersection of elements

// this call back function will be called each time the
// the observed element is intersecting the root element
// at the threshold that we defined

// whenever the first section (our target = section1) intersects with the viewport at 10% the call back function is executed

// const osbCallBack = function(enteries, observer) {
//   enteries.forEach(entry => console.log(entry));
// };
// const obsOption = {
//   root: null, // if Null: all the view port
//   threshold: 0.3 // 10%
//   // threshold can be also an array [0, 0.2]
//   // 0% and 20% entering or outing
// };
// const observer = new IntersectionObserver(osbCallBack, obsOption);

// observer.observe(section1); // our target need to observe the inersection with the section1

const obsCallBack = function(enteries) {
  const [entry] = enteries;
  if (!entry.isIntersecting)
    document.querySelector(".nav").classList.add("sticky");
  else document.querySelector(".nav").classList.remove("sticky");
};

// calculate the nav in px

const navHeight = nav.getBoundingClientRect().height;
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px` // its a visual margin
};

const headerObserver = new IntersectionObserver(obsCallBack, obsOptions);

headerObserver.observe(header);

// Reveal sections when scrolling
//--------------------------------

// creating the callback function for the observer
const revealSection = function(enteries, observer) {
  const [entry] = enteries;
  console.log(entry);
  // use guard
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  // unobserve once done first time
  observer.unobserve(entry.target);
};

// creating the observer
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

// selecting all the sections
const allSections = document.querySelectorAll(".section");

// observing all sections
allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

// lazy loading pictures
//----------------------

// creating callback function for the observer
const lazyPictures = function(entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  // replace the source attribute data-src with the src attribute
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function() {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

// creating observer
const lazyLoading = new IntersectionObserver(lazyPictures, {
  root: null,
  threshold: 0,
  rootMargin: "200px"
});

// observing all pictures
const allPictures = document.querySelectorAll("img[data-src]");
allPictures.forEach(img => lazyLoading.observe(img));

// slider
//-------

// selecting slider and spreading all pictures to be visitble to work with
// const slider = document.querySelector(".slider");
// slider.style.transform = `scale(0.3) translateX(-700px)`;
// slider.style.overflow = `visible`;

// slecting all the slides
const slides = document.querySelectorAll(".slide");

// selecting left and right buttons
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

// creating current slide variable
let curSlide = 0;
const maxSlides = slides.length;

// function to detemine which slide to go to
const goToSlide = function(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

// 0 100 200 300
// need to go to slide 1 => -100 0 100 200 =>
// curSlide = 2 =>  -200 -100 0 100

// initial slide
goToSlide(0);

// next slide to the right

const nextSlide = function() {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const previousSlide = function() {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

// click right button
btnRight.addEventListener("click", nextSlide);
// click left button
btnLeft.addEventListener("click", previousSlide);
