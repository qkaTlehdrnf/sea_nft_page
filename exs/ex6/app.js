"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
// userName = userInput; // Error
function generateError(message, code) {
    throw { message: message, errorCode: code }; //maybe throw is needed
    // while (true) {console.log(1);}//like this, infinite loop can manage never
    // console.log('never');
}
generateError("An error occurred!", 500);
//# sourceMappingURL=app.js.map