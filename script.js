"use strict";

// Functions in Javascript -> Sometimes it is useful to have functions that have default values

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 syntax
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum: flightNum,
//     numPassengers: numPassengers,
//     price: price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("ph123", 3);
// createBooking("LAG123", 4);
// // A unique thing to notice is that in the ES6 syntax, we can use the value of our previous parameter in latter parameter
// // Another thing to note is that we cannot skip arguments

// const flight = "LH234";
// const david = {
//   name: "david segun",
//   passport: "23456789",
// };

// const checkIn = function (flightNum, Passenger) {
//   flightNum = "LH999";
//   Passenger.name = "Mr. " + Passenger.name;

//   if (Passenger.passport === "23456789") {
//     alert("Check in!");
//   } else {
//     alert("wrong passport!");
//   }
// };

// checkIn(flight, david);
// console.log(flight);
// console.log(david);

// FIRST CLASS FUNCTIONS AND HIGH ORDER FUNCTION -> javascript treats functions as first class citizens, this means that functions are simply values [functions are another "type" of object]

// since functions are values, they are a couple interesting thing we could do with functions
// 1 -> pass a function into another function call as a value
// 2 -> return a function from functions
// const btn = document.querySelector(".btn");
// const greet = () => {
//   alert("Hey David");
// };

// btn.addEventListener("click", greet);

// // Higher Order Functions -> These are functions that either receives other functions as an argument or they return other functions

// function count() {
//   let counter = 0;
//   return function () {
//     counter++;
//   };
// }

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// HIGHER ORDER FUNCTIONS
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transformer("javaScript is the best!", upperFirstWord);

// Javascript uses call back all the time
const hello = () => {
  console.log("hello👋");
};

document.body.addEventListener("click", hello);

// function that returns a functions
// const greet = function (greeting) {
//   // returns a new function
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHey = greet("Hey");
// greetHey("Jonas");
// greetHey("Stephen");

// challenge : rewrite the function usign the arrow funcrtions

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

// call the functions
const greetHey = greet("Hello");
greetHey("Segun");
greetHey("David");
greetHey("Olasunkanmi");

// call and apply methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const euroWings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

book.call(euroWings, 23, "Sarah Williams");

// call method
// apply method
// bind method

// with event listeners
lufthansa.planes = 300;

// function returning another function challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxRate(0.2)(300));

// immediately invoked functions in javascript -> sometimes in javascript, we need a function that is only executed once and not executed again (disappears)
// IIFE Pattern -> Immediately invoked function execution pattern
(function () {
  console.log("this function will run once");
})();

(() => {
  console.log("this function will RUN once too!");
})();
