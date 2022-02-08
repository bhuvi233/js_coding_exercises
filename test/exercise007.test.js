const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
    } = require("../challenges/exercise007");
  
describe("sumDigits", () => {
    test("returns the sum of all its digits", () => {
        expect(sumDigits(12)).toBe(3);
        expect(sumDigits(456)).toBe(15);
        expect(sumDigits(7)).toBe(7);
        expect(sumDigits(798)).toBe(24);
    });
});

describe("createRange", () => {
    test("receives a start, an end and a step and creates a range of numbers between start and end as an array", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(25, 46, 3)).toEqual([25, 28, 31, 34, 37, 40, 43, 46]);
        expect(createRange(53, 60)).toEqual([53, 54, 55, 56, 57, 58, 59, 60]);
    });
});

describe("getScreentimeAlertList", () => {
    const users = [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                         { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                         { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                         { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                         { date: "2019-06-13", usage: { twitter: 10, instagram: 56, facebook: 61} },
                        ]
           },
           {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                         { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                         { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 96, safari: 16} },
                         { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
           },
         ]
    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-06-13")).toEqual(["beth_1234", "sam_j_1989"]);
    });
});

describe("hexToRGB", () => {
    test("receives a start, an end and a step and creates a range of numbers between start and end as an array", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
        expect(hexToRGB("#34B620")).toEqual("rgb(52,182,32)");
        expect(hexToRGB("#00FF00")).toEqual("rgb(0,255,0)");
    });
});

describe("findWinner", () => {
    test("return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner", () => {
        const play1 = [
              ["X", "0", null],
              ["X", null, "0"],
              ["X", null, "0"]
             ]
        expect(findWinner(play1)).toBe("X");
    });

    test("return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner", () => {
        const play1 = [
              ["X", "0", "0"],
              ["X", "X", "0"],
              [null, null, "0"]
             ]
        expect(findWinner(play1)).toBe("0");
    });

    test("return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner", () => {
        const play1 = [
              ["X", "0", "0"],
              ["X", "X", null],
              [null, null, "0"]
             ]
        expect(findWinner(play1)).toBe(null);
    });

    test("return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner", () => {
        const play1 = [
              ["X", "0", "X"],
              ["0", "X", null],
              ["X", null, "0"]
             ]
        expect(findWinner(play1)).toBe("X");
    });
});