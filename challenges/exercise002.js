function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  
  const MaxPeoplePerBus = 40;

  if (people == 0)
    return 0;

  let busCount = 1;
  while(people > MaxPeoplePerBus)
  {
    people = people - MaxPeoplePerBus;
    busCount++;
  }
  return busCount;
  
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  
  return arr.filter(animal => animal === "sheep").length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  
  return person.address.city === "Manchester" && (person.address.postCode).startsWith("M");
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
