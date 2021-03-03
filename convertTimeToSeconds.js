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
function timeToSeconds(hours, minutes, seconds = 0){
  seconds += (hours * Math.pow(60,2) + (minutes * 60))
  return seconds
}

// function to convert the time to seconds only
function convertToSeconds(hours, minutes, seconds = 0){
return (typeInteger(hours, minutes, seconds))
  ? timeToSeconds(hours,minutes,seconds)
  : "Incorrect input"
}

