function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return (word[0].toUpperCase() + word.slice(1));
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return (firstName[0] + '.' + lastName[0]);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  let rate = (originalPrice * (vatRate/100));
  // If the rate is Float, round the decimal places to 2 digits
  rate = Number(rate.toFixed(2));
  return (originalPrice + rate);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  let rate = (originalPrice * (reduction/100));
  // If the rate is Float, round the decimal places to 2 digits
  rate = Number(rate.toFixed(2));
  return (originalPrice - rate);
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
  return (str.substring(position , position + length));
    
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return (word.split("").reverse().join(""));
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  let reversedWords = words.map((word) => (word.split("").reverse().join("")));
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  let count = 0;
  users.forEach(user => {
    if(user.type === "Linux")
      count++;
  });
  return (count);
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  let mean = scores.reduce((prev, curr) => prev + curr) / scores.length;
  return(Number(mean.toFixed(2)));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  
  let strings = ["fizz" , "buzz"]
  let result = "";
  if( n % 3 === 0 )
    result += strings[0];
  if( n % 5 === 0 )
    result +=strings[1];
  return (result === "" ? n : result);
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
