function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  return nums.map(num => num * num);

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  let firstWord = words[0];
  words.shift();
  let otherWordsWithCamelCase = words.map(word => word[0].toUpperCase() + word.slice(1));
  
  return firstWord + otherWordsWithCamelCase.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  let totalSubjects = 0;
  people.forEach(person => totalSubjects += person.subjects.length);
  return totalSubjects;
  
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  for(let item in menu) {
    let itemWithSpecialIngredient = menu[item].ingredients.filter(ing => ing === ingredient);
    if (itemWithSpecialIngredient.length > 0) 
      return true;
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  return [...new Set(arr1.filter(element => arr2.includes(element)).sort())];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
