"use strict";

// Functions in Javascript -> Sometimes it is useful to have functions that have default values

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 syntax
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("ph123", 3);
createBooking("LAG123", 4);
// A unique thing to notice is that in the ES6 syntax, we can use the value of our previous parameter in latter parameter
// Another thing to note is that we cannot skip arguments
