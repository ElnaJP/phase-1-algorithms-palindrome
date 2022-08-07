function isPalindrome(word) {
  let letterArray = word.split("");
  l = letterArray.length
 for (let i = 0; i < (l-1)/2; i++){
   if (letterArray[i] !== letterArray[l-1-i]){
     return false
   }
 } return true
}

if (require.main === module) {
  
// 4 letters
console.log("Expecting: true");
console.log("=>", isPalindrome("deed"));

console.log("");

// 3 letters
console.log("Expecting: true");
console.log("=>", isPalindrome("nun"));

console.log("");

// 6 letters
console.log("Expecting: true");
console.log("=>", isPalindrome("redder"));

console.log("");

// 7 letters
console.log("Expecting: true");
console.log("=>", isPalindrome("rotator"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

// 5 letters 
console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

console.log("");

// 9 letters 
console.log("Expecting: true");
console.log("=>", isPalindrome("redivider"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("hello"));

console.log("");
}

module.exports = isPalindrome;


