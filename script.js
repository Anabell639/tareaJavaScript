//Variables y tipo de datos
let number = 222
console.log('Value: ', number, '| Data type: number')

let text = 'Hello, this is a text.'
console.log('Value: ', text, '| Data type: string')

let thisIsTrue = 369
console.log('Value: ', Boolean(thisIsTrue), '|  Data type: boolean')

let thisIsFalse = ''
console.log('Value: ', Boolean(thisIsFalse), '| Data type: boolean')

let variableNull = null
console.log('Value: ', variableNull, '| Data type: null')

let thisIsNotDedined = undefined
console.log('Value: ', thisIsNotDedined, '| Data type: undefined')

let today = [16, 'September', true]
console.log('Value: ', today, '| Data type: array')

//Decisiones en javascript (if,if else, switch)/
//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.

let greaterLessEqual = prompt('Please enter a number:')
let convertNumber = parseFloat(greaterLessEqual)

if (convertNumber > 10) {
  console.log('The number is greater than 10.')
} else if (convertNumber < 10) {
  console.log('The number is less than 10.')
} else {
  console.log('The number is equal to 10.')
}

//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
let evenOrOdd = prompt('Please enter a number:')
evenOrOdd = parseInt(evenOrOdd)

if (evenOrOdd % 2 === 0) {
  console.log('The number is even.')
} else {
  console.log('The number is odd.')
}

//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
let letterCorV = prompt('Please enter one single letter:')
letterCorV = letterCorV.toLowerCase()

if (letterCorV.length === 1) {
  if ('aeiou'.indexOf(letterCorV) !== -1) {
    console.log('The letter is a vowel.')
  } else if ('bcdfghjklmnpqrstvwxyz'.indexOf(letterCorV) !== -1) {
    console.log('The letter is a consonant.')
  }
}

//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let age = prompt('Please enter your age:')
age = parseInt(age)

if (age >= 18) {
  console.log('You are of legal age.')
} else {
  console.log('You are a minor.')
}

//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
let dayNumber = prompt('Please enter a number from 1 to 7:')
dayNumber = parseInt(dayNumber)

const daysOfWeek = [
  '0',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
console.log(daysOfWeek[dayNumber])

//Funciones
//Escribe una función que tome dos números como argumentos y devuelva su suma.
function addNumbers (num1, num2) {
  return console.log(`The sum is: ` + (num1 + num2))
}
addNumbers(29, 82)

//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function evenOrNot (number) {
  if (number % 2 === 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}
evenOrNot(1239)

//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function sumArrayElements (numberArray) {
  let sum = 0
  for (let i = 0; i < numberArray.length; i++) {
    sum = sum + numberArray[i]
  }
  return console.log(sum)
}

sumArrayElements([2, 4, 6])

//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
function findLongestStringLength (stringArray) {
  let longestLength = 0

  for (let i = 0; i < stringArray.length; i++) {
    const currentStringLength = stringArray[i].length

    if (currentStringLength > longestLength) {
      longestLength = currentStringLength
    }
  }

  return longestLength
}

const strings = ['table', 'banana', 'tv', 'date']
const longestLength = findLongestStringLength(strings)

console.log(`The length of the longest string is: ${longestLength}`)

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
function objectValuesToArray (obj) {
  return Object.values(obj)
}

const myObject = {
  name: 'Mark',
  age: 30,
  city: 'Taipu de Fora'
}
const valuesArray = objectValuesToArray(myObject)
console.log(valuesArray)

//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.
function findLargestNumber (numberArray) {
  let largestNumber = numberArray[0]

  for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] > largestNumber) {
      largestNumber = numberArray[i]
    }
  }

  return largestNumber
}
const numbers_ = [5, 12, 700, 10, 975, 20, 3]
const largestNumber = findLargestNumber(numbers_)

console.log(`The largest number is: ${largestNumber}`)

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.
function sortNumbersAscending (numberArray) {
  return numberArray.slice().sort((a, b) => a - b)
}

const numbers = [5, 12, 7, 1, 9, 20, 3]
const sortedNumbers = sortNumbersAscending(numbers)
console.log(`Sorted numbers in ascending order: ${sortedNumbers}`)

//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.
function findCommonElements (array1, array2) {
  const commonElements = []

  for (const element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element)
    }
  }
  return commonElements
}

const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]
const commonElementsArray = findCommonElements(array1, array2)

console.log(`Common elements: ${commonElementsArray}`)

//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.
function uppercaseArrayWords (words) {
  let uppercaseWords = []
  for (let i = 0; i < words.length; i++) {
    uppercaseWords.push(words[i].toUpperCase())
  }
  return console.log(uppercaseWords)
}
uppercaseArrayWords(['hello', 'two'])

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.
function getArrayFromNumbers (numbers) {
  let sumOfIndices = 0
  let newArray = []

  for (let i = 0; i < numbers.length; i++) {
    sumOfIndices += numbers[i]
  }

  newArray.push(sumOfIndices)
  return console.log(
    'The new array contains the total sum of its elements, represented as ' +
      newArray
  )
}

getArrayFromNumbers([2, 7])

//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

//Escribe un bucle while que imprima en la consola los números del 1 al 5.
for (let i = 0; i <= 5; i++) {
  console.log(i)
}

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.
let vector = [1, 2, 3, 4, 5]

for (let i = 0; i < vector.length; i++) {
  console.log(vector[i])
}

// Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

function sumAllPositions (number) {
  let sum = 0
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  return console.log('The sum of the positions is ' + sum)
}
sumAllPositions(3)

// Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.

function addVectorElements (vector) {
  let sum = 0
  for (let i = 0; i < vector.length; i++) {
    sum += vector[i]
  }
  return console.log('The sum of the vector is ' + sum)
}
addVectorElements([1, 1, 3])

// DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón
const button = document.getElementById('myButton')
const div = document.getElementById('myDiv')

button.addEventListener('click', function () {
  const message = 'You clicked the button!'
  div.textContent = message
})

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.
const divColor = document.getElementById('myDiv')
function changeColor (event) {
  event.target.style.backgroundColor = 'pink'
}
div.addEventListener('mouseover', changeColor)
div.addEventListener('mouseout', function (event) {
  event.target.style.backgroundColor = 'lightblue'
})

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.
div.addEventListener('mouseover', () => {
  div.style.fontSize = '6rem'
})

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

div.addEventListener('dblclick', () => {
  div.innerHTML = '<h1>Have a nice day!</h1>'
})

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.

function changeBackground () {
  document.body.style.backgroundImage = "url('background.jpg')"
}
document.body.addEventListener('load', changeBackground)
