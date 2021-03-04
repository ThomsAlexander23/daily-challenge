// [Additive Number]
// Additive number is a string whose digits can form additive sequence.
// A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
// Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.
// Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.
// Example 1:
// Input: "112358"
// Output: true
// Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
//              1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
// Example 2:
// Input: "199100199"
// Output: true
// Explanation: The additive sequence is: 1, 99, 100, 199. 
//              1 + 99 = 100, 99 + 100 = 199
 
// Constraints:
// num consists only of digits '0'-'9'.
// 3 <= num.length <= 35


function isAdditiveNumber(numStr){
   if(numStr.length < 3) {return false;}
   let str = "";
   let check = true;
   for(let i = numStr.length - 1; i > 1; i--){
      str = numStr[i] + str;
      if(numStr[i] === "0") {continue;}
      let num1 = str;
      let num2 = numStr[i - 1]
      for(let j = i - 2; j >= 0; j--){
         if((num2[0] === "0") && num2.length > 1){
            num2 = numStr[j] + num2
            check = false;
         } 
         else if(parseInt(num1) >= parseInt(num2)){
            let diff = num1 - num2;
            if(numStr.slice(0, j + 1).endsWith(diff)){
               num1 = num2;
               num2 = diff;
               let ind = Math.floor(Math.log10(diff));
               console.log(ind)
               ind = ind < 0 ? 0 : ind
               j -= ind;
               console.log(j)
               check = true;
            }
            else {
               num2 = numStr[j] + num2
               check = false;
            }
         }
         else{
            check = false;
            break;
         }
      }
      if(check) return check;
   };
   return check;
};

let stringOne = "11235813213455"
let stringTwo = "12334578123201"
let stringThree = "199100199"
let stringFour = "112345"
console.log(isAdditiveNumber(stringOne));
console.log(isAdditiveNumber(stringTwo));
console.log(isAdditiveNumber(stringThree));
console.log(isAdditiveNumber(stringFour));