// // // let isRaining = true
// // // ? console.log("You need a rain coat")
// // // : console.log("you dont need")

// // // isRaining = false
// // // ? console.log(" You dont need")
// // // : console.log("You need a rt")

// // // alert("You're welcome to Javascript class")

// // // let number = prompt('Enter number', 'number goes here')
// // // console.log(number)

// // // const now = new Date()
// // // console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
// // const now = new Date()
// // const year = now.getFullYear() // return year
// // const month = now.getMonth() + 1 // return month(0 - 11)
// // const date = now.getDate() // return date (1 - 31)
// // const hours = now.getHours() // return number (0 - 23)
// // const minutes = now.getMinutes() // return number (0 -59)

// // console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

// //Day 3 Exercise
// // Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = 'Abdussomad'
// let lastName = 'Sikirullah'
// let country = 'Nigeria'
// let city = 'Dutse'
// const age = 23
// const isMarried = 'Single'
// const year = 2023
// console.log(typeof(firstName))
// console.log(typeof(lastName))
// console.log(typeof(country))
// console.log(typeof(city))
// console.log(typeof(age))
// console.log(typeof(isMarried))
// console.log(typeof(year))
// console.log(10 ==='10')
// console.log(parseInt('9.8') == 10)
// let bow= (10>9)
// bow2 = (20>10)
// console.log(bow, bow2)
// bow3 = (10<9)
// bow4 = (20<10)
// bow5 = (30<10)
//console.log(bow3,bow4,bow5)
// console.log(4 > 3)
// console.log(4 >= 3)
// console.log(4 < 3)
// console.log(4 <= 3)
// console.log(4 == 4)
// console.log(4 === 4)
// console.log(4 != 4)
// console.log(4 !== 4)
// console.log(4 != '4')
// console.log(4 == '4')
// console.log(4 === '4')
// let and = 'python'
// let nad = 'jargon'
// console.log(and.length)
// console.log(nad.length)
// console.log("jargon"==="python")
// console.log(4 > 3 && 10 < 12)
// console.log(4 > 3 && 10 > 12)
// console.log(4 > 3 || 10 < 12)
// console.log(4 > 3 || 10 > 12)
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!(false))
// console.log(!(4 > 3 && 10 < 12))
// console.log(!(4 > 3 && 10 > 12))
// console.log(!(4 === '4'))

const year = new Date()
let fullYear = year.getFullYear ()
console.log(fullYear)

const month = new Date()
let Month = month.getMonth ()
console.log(Month)

const date = new Date()
let Dated = date.getDate ()
console.log(Dated)

const dday = new Date()
let Datedd = dday.getDay ()
console.log(Datedd)

const hour = new Date()
let Hour = hour.getHours ()
console.log(Hour)

const minutes = new Date()
let Minutes = minutes.getMinutes ()
console.log(Minutes)

var now = new Date();
var bDay = new Date(1970);
var elapsedT = now - bDay; 
console.log(elapsedT)