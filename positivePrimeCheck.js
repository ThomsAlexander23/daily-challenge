/*
  Create a function that returns a boolean of true if a number is prime positive, and false otherwise. A prime number is any positive integer that is evenly divisible by only two divisors one and itself.

  first ten prime number are: 2,3,5,7,11,13,17,19,23,29

  examples:

    isPrime(31) === true
    isPrime(18) === false
    isPrime(11) === true

  constraints:

  A prime number has no other factors except 1 and itself.

  If a number is odd it is not divisible by an even number.

  1 is not considered a prime number.

  Author: Alex
  Version: 03072021
*/

function positiveNumOnly(input){
  let numCheck = typeof(input) === "number"
  let posCheck = input >= 0
  return (numCheck && posCheck)
}

function isPrime(num){
  if (!positiveNumOnly(num) || num <= 1){
    return false
  }
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return true
}
