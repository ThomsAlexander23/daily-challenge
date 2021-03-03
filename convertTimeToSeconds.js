/* 
  create a function that takes two input (hours and minutes) and convert them to total amount of seconds
  Author: Alex
  Version: 03022021
*/

// function to ensure type of input is an interger
function typeInteger(...inputs){
  let array = []
  for (let i = 0; i< inputs.length; i++){
     array.push(!isNaN(parseInt(inputs[i])))
  }
  return array.every(Boolean)
}

// function to convert minutes to seconds
function minToSec(input){
  return input * 60
}

// function to convert hours to seconds
function hrToSec(input){
  return (input * 60)* 60
}

// function to convert hours and mins to seconds
function timeToSeconds(hours, minutes, seconds){
  seconds += (hours * Math.pow(60,2) + (minutes * 60))
  return seconds
}
console.log(timeToSeconds(1,3))
console.log(timeToSeconds(2,0))
console.log(timeToSeconds(2,0,20))

// function to convert the time to seconds only
function convertToSeconds(hours, minutes, seconds){
return (typeInteger(hours, minutes, seconds))
  ? timeToSeconds(hours,minutes,seconds)
  : "Incorrect input"
}

console.log(convertToSeconds(1,3))
console.log(convertToSeconds(2,0))
console.log(convertToSeconds(2,0,20))