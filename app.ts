function addString(n1: number, n2: number): string {
    return (n1 + n2).toString();
}
console.log(add(1,2));

function add(n1:number, n2:number): number{
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
    return null;
}

printResult(add(1,2));
console.log(printResult(add(1,2)));

// let combinedValues: Function;
let combineValue: (a: number, b:number) => number;

combinedValues = add;

console.log(combinedValues(1,2));