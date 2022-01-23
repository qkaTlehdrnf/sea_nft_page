function addString(n1, n2) {
    return (n1 + n2).toString();
}
console.log(add(1, 2));
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
    return null;
}
printResult(add(1, 2));
console.log(printResult(add(1, 2)));
var combinedValues;
combinedValues = add;
combinedValues = 5;
console.log(combinedValues(1, 2));
