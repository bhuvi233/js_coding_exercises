function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  
  return(sandwich.fillings);
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  
  return (person.city === "Manchester" ? true : false);
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  
  if (people == 0)
    return 0;

  let k = 1;
  while(people > 40)
  {
    people = people - 40;
    k++;
  }
  return k;
  
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let result = arr.filter(animal => animal === "sheep");
  return result.length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  
  return (person.address.city === "Manchester" && person.address.postCode[0] === "M" ? true : false);
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
