"use strict";
exports.__esModule = true;
function stairsIn20(s) {
    //code here
    var half = s.length / 2;
    return s.slice(Math.ceil(half - 1), Math.floor(half + 1));
}
exports.stairsIn20 = stairsIn20;
console.log(stairsIn20('abc'));
console.log(stairsIn20('abcd'));
console.log(stairsIn20('abcde'));
