//Variables y tipo de datos
let number = 222;
console.log("Value: ", number, "| Data type: number");

let text = "Hello, this is a text.";
console.log("Value: ", text, "| Data type: string");

let thisIsTrue = 369;
console.log("Value: ", Boolean(thisIsTrue), "|  Data type: boolean");

let thisIsFalse = '';
console.log("Value: ", Boolean(thisIsFalse), "| Data type: boolean");

let variableNull = null;
console.log("Value: ", variableNull, "| Data type: null");

let thisIsNotDedined = undefined;
console.log("Value: ", thisIsNotDedined, "| Data type: undefined");

let today = [16, "September", true];
console.log("Value: ", today, "| Data type: array");



//Decisiones en javascript (if,if else, switch)/
//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.

let greaterLessEqual = prompt("Please enter a number:");
let convertNumber = parseFloat(greaterLessEqual);

if (convertNumber > 10) {
  console.log("The number is greater than 10.");
} else if (convertNumber < 10) {
  console.log("The number is less than 10.");
} else {
  console.log("The number is equal to 10.");
}


//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
let evenOrOdd = prompt("Please enter a number:");
evenOrOdd = parseInt(evenOrOdd);

if (evenOrOdd % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
let letterCorV = prompt("Please enter one single letter:");
letterCorV = letterCorV.toLowerCase();

if (letterCorV.length === 1) {
    if ("aeiou".indexOf(letterCorV) !== -1) {
      console.log("The letter is a vowel.");
    } else if ("bcdfghjklmnpqrstvwxyz".indexOf(letterCorV) !== -1) {
      console.log("The letter is a consonant.");
    }
}    


//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let age = prompt("Please enter your age:");
age = parseInt(age);

if (age >= 18) {
  console.log("You are of legal age.");
} else {
  console.log("You are a minor.");
}


//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
let dayNumber = prompt("Please enter a number from 1 to 7:");
dayNumber = parseInt(dayNumber);

const daysOfWeek = [
  "0",  
  "Sunday",  
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(daysOfWeek[dayNumber]);



//Funciones
