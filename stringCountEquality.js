/* 
  Create a function that two strings as arguments and return true/false depending on the two strings being equal in type string and the length of the string enetered.

  contraints:
    -return the result
    -input needs to be strings
    -check for fringe cases
*/
"use strict"

// function to determine input is a string
function typeString(x){
  return (typeof(x) === "string")
}

// finding the length of a string
function stringLength(x){
  return x.length
}

// comparing two words for equality in string type
// using typeString function
function compareTypeString(x,y){
  return (typeString(x) && typeString(y))
}

// comparing two words for equality in length of a 
// string using the stringLength function
function compareStringLength(x,y){
  return (stringLength(x) === stringLength(y))
}

// function to solve the exercise by utilizing our
// previously made function 
function equalInTypeAndCount(wordOne, wordTwo){
  return (compareTypeString(wordOne, wordTwo) &&compareStringLength(wordOne, wordTwo))
    ? true
    : false
}


