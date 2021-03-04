/*
  Create a function that returns the number of frames shown in a given number of minutes for a certain Frame per second (FPS)

    frames(1,1) = 60
    frames(10,1) = 600
    frames(10, 25) = 15000

    Author: Alex
    Version: 02042021
*/

function typeInteger(...inputs){
  let array = []
  for (let i = 0; i< inputs.length; i++){
     array.push(!isNaN(parseInt(inputs[i])))
  }
  return array.every(Boolean)
}

function famesPerSecond(min, fps){
  if (!typeInteger(min,fps) === false){
    return false
  }
let seconds = min * 60
return fps * seconds
}
