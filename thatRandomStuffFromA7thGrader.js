const existingWords = require("an-array-of-spanish-words");
const M = [
    ["o", "d", "i", "r"],
    ["e", "o", "a", "b"],
    ["a", "s", "n", "t"],
    ["t", "i", "a", "c"],
];

const words = [];
const deltas = [-1, 0, 1];
function posInForbid(r, c, forbid) {
    if (r < 0 || c < 0 || c > 3 || r > 3) {
        return true;
    }
    return forbid.reduce((acc, curr) => acc || (curr[0] === r && curr[1] === c), false);
}
function getWordsEndingIn(r, c, forbid, n) {
    if (!posInForbid(r, c, forbid)) {

        if (n === 1) {
            return [M[r][c]];
        }
        let wordsEndingInThis = [];
        const newForbid = forbid.concat([[r, c]]);
        deltas.forEach((dr) => {
            deltas.forEach((dc) => {
                if (dr !== 0 || dc !== 0) {
                    wordsEndingInThis = wordsEndingInThis.concat(getWordsEndingIn(r + dr, c + dc, newForbid, n - 1).map(w => w + M[r][c]));
                }
            })
        });
        return wordsEndingInThis;
    }
    return [];
}

const wordSet = new Set(existingWords);
const A = [0, 1, 2, 3];
A.forEach(r => {
    A.forEach(c => {
        console.log("Doing", r, c);
        getWordsEndingIn(r, c, [], 12).forEach(w => {
            if (wordSet.has(w)) {
                console.log(`${w} is there`);
            }
        });
    });
});


