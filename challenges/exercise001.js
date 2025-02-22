function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  
  return word[0].toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  return firstName[0] + '.' + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  return originalPrice + Number((originalPrice * (vatRate/100)).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  return originalPrice - Number((originalPrice * (reduction/100)).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  
  let length = 0, position = 0;
  if (str.length % 2 == 1){
    position = str.length / 2;
    length = 1; 
  }
  else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position , position + length);
    
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  return words.map((word) => (word.split("").reverse().join("")));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  let count = 0;
  users.forEach(user => (user.type === "Linux") ? count++ : 0)
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  return Number((scores.reduce((prev, curr) => prev + curr) / scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  
  let strings = ["fizz" , "buzz"]
  let outputString = "";
  if( n % 3 === 0 )
    outputString += strings[0];
  if( n % 5 === 0 )
    outputString +=strings[1];
  return outputString === "" ? n : outputString;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
