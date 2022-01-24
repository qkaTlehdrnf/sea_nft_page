function addString(n1: number, n2: number): string {
  return (n1 + n2).toString();
}
console.log(add(1, 2));

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
  return null;
}

printResult(add(1, 2));
console.log(printResult(add(1, 2)));

// let combinedValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(1, 2));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (results: number) => {
  console.log("add and handle: ", results);
  return results;
});

console.log(
  "return of void",
  addAndHandle(10, 20, (result: number) => {
    return result;
  })
);
