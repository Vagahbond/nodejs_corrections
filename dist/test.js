"use strict";
const object = {
    a: "a",
    b: 2
};
JSON.stringify(object);
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const timeObject = {
    hours,
    minutes,
    seconds,
};
// le js c fassil
