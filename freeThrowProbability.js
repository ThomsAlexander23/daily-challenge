/*
  create a function that will output the probability of making a number of free throws with a known free throw percentage. If Sally makes 50% of her shots, then her probability of making 5 free throws in a row would be 3%.

    Examples:
      freeThrows("75%", 5) === "24%"
      freeThrows("25%", 3) === "2%"
      freeThrows("90%", 30) === "4%"

    Notes: 
      The success rate is a string
      The function should return a string with the percent sign
      Round your answer to the nearest whole number

    Author: Alex
    Version: 03082021
*/
function checkType(string, number){
  let percentSignCheck = string.includes("%")
  if (typeof(string) !== "string" || (percentSignCheck != true) || (typeof(number) !== "number") ){
    return false
  }
  return true
}

function freeThrows(percentage, basketsMade){
  if (checkType(percentage, basketsMade) !== true){
    return false
  }
  percentage = parseInt(percentage)/100
  let probability = (percentage**basketsMade) * 100
  return `${Math.round(probability)}%`
}

