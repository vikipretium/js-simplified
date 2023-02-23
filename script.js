// l6
// console.log("Hello World!")

// l8 - variables
// let favNum = 1
// console.log(favNum)
// favNum = 4
// console.log(favNum)

// l9 - numtypes
// let a = 1
// console.log(typeof a)

// let int = 2
// let float = 3

// console.log(typeof int)
// console.log(typeof float)

// let num1 = 1.2
// let num2 = 2.2

// console.log(num1 + num2) //check output

// l10 - strings
// let string1 = "some words for string"
// console.log(string1)

// let word1 = "Hello"
// let word2 = "World!"

// console.log(word1 + " " + word2)

// l11 - booleans
// let bvalue = true
// let bvalue1 = false

// console.log(typeof bvalue)
// console.log(typeof bvalue1)

// console.log(bvalue && bvalue1)
// console.log(bvalue || bvalue1)
// console.log(bvalue && !bvalue1)

// let happy = true
// console.log(happy)
// console.log(!happy)
// console.log(!!happy)

// l12 - null and undefined
// let undefinedValue = undefined
// console.log(undefinedValue)

// let unassingnedValue
// console.log(unassingnedValue)

// unassingnedValue = null
// console.log(unassingnedValue)

// l13 - comparison operator

// let value1 = 1
// let value2 = 2

// console.log(value1 == value2)
// console.log(value1 != value2)
// console.log(value1 < value2)
// console.log(value1 > value2)
// console.log(value1 <= value2)
// console.log(value1 >= value2)

// value1 = null
// value2 = undefined

// console.log("null + undefined: " + (value1 == value2))

// l14 - garbage collector
// unused variables will be deleted, if its not used in any line of the program anymore.

// l15 - comments
/*
 for multi line comment use 
 use these in line 81 and 83
*/

// // l16 - functions and scoping
// function sayHello() {
//   console.log("Hello")
// }
// sayHello()

// function sum(a, b) {
//   return a + b
// }

// let number1 = 1
// let number2 = 2
// let sum1 = sum(number1, number2)
// console.log(sum1)

// function helloName(name) {
//   return "Hello " + name
// }
// console.log(helloName("v"))

// // l17 - pass function to another function
// function func1(variable1) {
//   console.log(variable1)
// }

// function func2(funcpass) {
//   funcpass("hello")
// }

// func2(func1)

// // l18 - arrow functions
// function sum(a, b) {
//   return a + b
// }
// console.log(sum(1, 2))

// let sumArrow = (a, b) => {
//   return a + b
// }
// console.log(sumArrow(1, 2))

// let sumArrowInOneLine = (a, b) => {
//   return a + b
// }
// console.log("arrowFunc in one line: 1+2=" + sumArrowInOneLine(1, 2))

// let nameArrow = name => {
//   return name
// }
// console.log(nameArrow("v"))

// let hiName = name => "hi " + name + "!"

// console.log(hiName("v"))

// // a function calling callback arrow function
// function func(x, callback) {
//   callback(x)
// }

// func(10, variable => console.log(variable))

// // l19 - debug

// let doStuff = (a, b, name) => {
//   print(sum(a, b))
//   print(sayHi(name))
// }
// debugger
// let print = variable => {
//   console.log(variable)
// }

// let sum = (a, b) => a + b
// let sayHi = name => "Hi " + name + "!"

// doStuff(1, 2, "v")

// // l20 - hoisting

// console.log(hoistCheck("checked"))
// function hoistCheck(variable) {
//   return variable
// }
// console.log(arrowHoist("check"))
// let arrowHoist = variable => variable

// // l21 - Idea of scope
// let a = 1
// console.log(b)
// {
//   let b = 2
//   console.log(c)
//   {
//     let c = 3
//     console.log(a)
//     console.log(b)
//     console.log(c)
//   }
// }

// // l22 - closure

// function print(variable) {
//   let c = 3
//   return function func(variable2) {
//     console.log(variable)
//     console.log(variable2)
//     console.log(c)
//   }
// }
// let a = print(1)

// console.log(a)
// a(2)

// l23 - const
// const a = 1
// console.log(a)

// l24 - var
// console.log(a)
// var a = 1
// console.log(a)

// l25 - type conversion
// let a = "1"
// console.log(a)
// console.log(typeof a)
// a = parseInt(a)
// console.log(a)
// console.log(typeof a)
// let b = "1.3"
// console.log(b)
// console.log(typeof b)
// b = parseFloat(b)
// console.log(b)
// console.log(typeof b)

// let number = 1
// let wordString = "hello"
// console.log(wordString + number) // number is converted in to a string for concatenation

// let number1 = 1
// let string1 = "1"
// console.log(number1 == string1) // + sign converts number to a string

// let number2 = 2
// let string2 = "3"
// console.log(string2 - number2) // - sign converts string to a number

// l26 - check equality

// let a = 1
// let b = "1"
// console.log(a == b) // converts value
// console.log(a === b) // check strictly the type of value without converting values

// let number = 0
// let bool = false
// console.log(number == bool) // here bool is converted into 0 (number)
// console.log(number === bool) // checks the type of value

// let value1 = null
// let value2 = undefined

// console.log(value1 == value2)
// console.log(value1 === value2)

// l27 - NaN - side effect of type conversion
// const a = "1"
// const b = "asdfasdf"
// console.log(typeof parseInt(a))
// console.log(parseInt(b)) // b is not a number (NaN)
// console.log(b == NaN) // log will be false
// console.log(b === NaN) // strict check will also be false
// // to check NaN, need to use inbuild function
// const c = parseInt("asdfasdf")
// console.log(c)
// console.log(isNaN(c)) // this inbuilt function will return the correct answer.
// const d = 1
// console.log(d)
// console.log(isNaN(d)) // d is a number so its false

// l28 - Arrays
// const a = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(a)
// console.log(a[0])
// console.log(a[1])
// a.push(9)
// console.log(a)
// a.push("string")
// console.log(a)
// const b = [
//   [1, 2],
//   [3, 4],
// ]
// console.log(b)
// const c = [5, 6]
// b.push(c)
// console.log(b)
// console.log(b[(0, 0)]) // accessing an array inside an array.
// console.log(b[0][1]) // accessing an element inside nested array.

// // length of an array
// console.log("array a length:" + a.length)
// console.log("array b length:" + b.length)

// l29 - objects

// let fishName = "sardine"
// let type = "indian sardine"
// let weight = 10

// let fish = { fishName: "sardine", breed: "indian", weight: 10 } // creating an object in js
// console.log(fish)

// // accessing values from the object
// console.log(fish.fishName)
// console.log(fish.weight)
// console.log(fish.breed)

// // console itself is a object and .log is a function
// console.log(console)

// // adding a function inside the fish object

// fish = {
//   fishName: "sardine",
//   breed: "indian",
//   weight: 10,
//   hi: function () {
//     console.log("hi from sardine")
//   },
// }

// // calling the hi function inside the fish object
// fish.hi()

// // adding a function inside the object without a property
// fish = {
//   fishName: "sardine",
//   breed: "indian",
//   weight: 10,
//   hi: function () {
//     console.log("hi from sardine")
//   },
//   // no need to add a property or function keyword inside an object
//   hello() {
//     console.log("hello from sardine")
//   },
// }

// fish.hello()

// // another interesting way to access an objects property

// let property = "fishName"

// console.log(fish[property])

// let book = {
//   title: "some book",
//   author: { name: "some name", age: "some age" },
// }

// console.log(book.title)
// console.log(book.author.name)
// console.log(book.author.age)

// // changing a property value

// book.title = "new name"

// console.log(book.title)
