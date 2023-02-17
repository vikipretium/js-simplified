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
