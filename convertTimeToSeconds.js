/* 
  create a function that takes two input (hours and minutes) and convert them to total amount of seconds
  Author: Alex
  Version: 03022021
*/

// function to ensure type of input is an interger
function typeInteger(input){
  return !isNaN(parseInt(input))
}

// function to convert minutes to seconds
function minToSec(input){
  return input * 60
}

// function to convert hours to seconds
function hrToSec(input){
  return (input * 60)* 60
}

// function to convert the time to seconds only
function convertToSeconds(hours, minutes){
return (typeInteger(hours) && typeInteger(minutes))
  ? (minToSec(minutes) + (hrToSec(hours)))
  : "Incorrect input"
}

console.log(convertToSeconds(1,3))
console.log(convertToSeconds(2,0))