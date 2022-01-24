"use strict";
const userName = "Maximilian23";
console.log(userName);
function clickHandler(message) {
    console.log('Clicked! ' + message);
}
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", () => {
        console.log("Clicked!");
    });
}
button.addEventListener('message: ', clickHandler.bind(null, 'goodbye'));
//# sourceMappingURL=app.js.map