const userName = "Maximilian23";

console.log(userName);
function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}
const button = document.querySelector("button")!; //as if button in below, you don't have to type ! in here.
if (button) {
  button.addEventListener("click", () => {
    console.log("Clicked!");
  });
}
button.addEventListener('message: ', clickHandler.bind(null, 'goodbye'));