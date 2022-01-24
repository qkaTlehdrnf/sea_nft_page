let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}
// userName = userInput; // Error

function generateError(message: string, code: number) : never {
    throw { message: message, errorCode: code };//maybe throw is needed
    // while (true) {console.log(1);}//like this, infinite loop can manage never
    // console.log('never');
}
generateError("An error occurred!", 500);