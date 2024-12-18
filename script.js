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
