function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  return nums.filter(num => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  return names.filter(name => name.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  return words.filter(word => word.match(/to\s+[a-zA-Z]*/g));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  return nums.filter(num => Number.isInteger(num) === true);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  let cities = [];
  users.forEach(user => cities.push(user.data.city.displayName));
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  return nums.map(num => Number(Math.sqrt(num).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  const regex =  new RegExp(`([a-z][A-Z]\s)*(${str})`,"i"); 
  return sentences.filter(sentence => sentence.match(regex));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  let longestSides = [];
  triangles.forEach(triangle => longestSides.push(Math.max(...triangle)));
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
