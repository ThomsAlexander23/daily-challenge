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

function freeThrows(percentage, basketsMade){
  percentage = parseInt(percentage)
  let probabitlity = percentage/100
  let chance = probabitlity**basketsMade
  chance = chance * 100
  return `${Math.round(chance)}%`
}

