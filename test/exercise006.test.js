const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
    } = require("../challenges/exercise006");
  
describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10], 7)).toBe(18);
        expect(sumMultiples([5, 3, 7, 15, 1, 10], 1)).toBe(33);
    });
});

describe("isValidDNA", () => {
    test("returns true/false depending on whether it is a valid DNA string", () => {
        expect(isValidDNA("AATGC")).toBe(true);
        expect(isValidDNA("AEGTCAT")).toBe(false);
        expect(isValidDNA("!AEGRTCAT")).toBe(false);
    });
});
  
describe("getComplementaryDNA", () => {
    test("return a string of the complementary base pairs", () => {
        expect(getComplementaryDNA("AATGC")).toBe("TTACG");
        expect(getComplementaryDNA("AGTCAT")).toBe("TCAGTA");
        expect(getComplementaryDNA("TTAAGCTA")).toBe("AATTCGAT");
    });
});

describe("isItPrime", () => {
    test("return a string of the complementary base pairs", () => {
        expect(isItPrime(74)).toBe(false);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(67)).toBe(true);
        expect(isItPrime(1)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("receive a number and return an array of n arrays, each filled with n items", () => {
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
        expect(createMatrix(2, "bar")).toEqual([["bar", "bar"], ["bar", "bar"]]);
    });
});

describe("areWeCovered", () => {
    test("return true/false depending on whether there are enough staff scheduled for the given day.", () => {
        const list = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Mark", rota: ["Monday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Mark", rota: ["Friday", "Monday", "Tuesday"] }
            ]
        expect(areWeCovered(list, "Monday")).toBe(true);
        expect(areWeCovered(list, "Friday")).toBe(false);
        expect(areWeCovered(list, "Tuesday")).toBe(true);
    });
});
  