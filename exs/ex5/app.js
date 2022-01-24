"use strict";
function addString(n1, n2) {
    return (n1 + n2).toString();
}
console.log(add(1, 2));
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
    return null;
}
printResult(add(1, 2));
console.log(printResult(add(1, 2)));
// let combinedValues: Function;
let combineValues;
combineValues = add;
console.log(combineValues(1, 2));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (results) => {
    console.log("add and handle: ", results);
    return results;
});
console.log("return of void", addAndHandle(10, 20, (result) => {
    return result;
}));
//# sourceMappingURL=app.js.map