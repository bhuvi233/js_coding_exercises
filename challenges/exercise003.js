function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  let squares = nums.map(num => num * num);
  return (squares);

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  let firstWord = words[0];
  words.shift();
  let result = words.map(curr => curr[0].toUpperCase() + curr.slice(1));
  
  return(firstWord + result.join(""));
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  let result = 0;
  people.forEach(person => result += person.subjects.length);
  return (result);
  
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  for(let x in menu) {
    let result = menu[x].ingredients.filter(ing => ing === ingredient);
    if (result.length > 0) 
      return true;
  }
  return (false);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  let result = [];
  arr1.forEach(element => 
    arr2.includes(element) ? 
    (!result.includes(element))?
        result.push(element)
        :false
    : false);
    
  return (result.sort());
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
