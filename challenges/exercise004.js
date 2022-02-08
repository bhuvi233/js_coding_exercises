function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  return (nums.filter(num => num < 1));
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  return (names.filter(name => name.startsWith(char)));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  let regex = /to\s+[a-z][A-Z]*/g
  let result = words.filter(word => word.match(regex));
  return (result);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  let result = nums.filter(num => Number.isInteger(num) === true);
  return (result);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  let result = [];
  users.forEach(user => result.push(user.data.city.displayName));
  return (result);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  return (nums.map(num => Number(Math.sqrt(num).toFixed(2))));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  const regex =  new RegExp(`([a-z][A-Z]\s)*(${str})`,"i"); 
  let result = sentences.filter(sentence => sentence.match(regex));
  return (result);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  let result = [];
  triangles.forEach(triangle => result.push(Math.max(...triangle)));
  return (result);
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
