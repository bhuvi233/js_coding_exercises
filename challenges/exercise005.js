const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  let index = nums.indexOf(n);
  return (index < 0 || index >= nums.length - 1) ? null : nums[index + 1]
  
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  let ZerosAndOnesCount = {"0": 0,
                           "1": 0};

  for (let i = 0; i < str.length; i++)
    (str[i] === '0') ? ZerosAndOnesCount[0]++ : ZerosAndOnesCount[1]++;
    
  return ZerosAndOnesCount;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  
  return Number(n.toString().split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  return arrs.map(arr => arr.reduce((perv, curr) => perv + curr)).reduce((prev, curr) => prev + curr);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  if (arr.length < 2)
    return arr;
    
  [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]]
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  const regex =  new RegExp(`([a-zA-Z]\s)*(${searchTerm})`,"i"); 
  
  for(const [key,value] of Object.entries(haystack))
    if(regex.exec(haystack[key]) != null) return true;

  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  let wordFreq = {};
  let strArray = (str.split(" ")).map(word => word.toLowerCase().match(/[a-zA-Z]*/));
  
  strArray.forEach(word => 
    wordFreq.hasOwnProperty(word) ? wordFreq[word]++ : wordFreq[word] = 1);

  return wordFreq;
  
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
