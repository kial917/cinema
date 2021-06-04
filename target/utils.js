"use strict";

function getRandomToMax(max) {
  return Math.ceil(Math.random() * (max + 1)) - 1;
}

;

function toHours(num) {
  return "".concat(num).padStart(2, '0');
}

function toMinutes(num) {
  return String(num).padEnd(2, '0');
}