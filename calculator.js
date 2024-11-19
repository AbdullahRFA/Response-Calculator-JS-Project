/**
 * The above JavaScript code defines functions for clearing, adding values, and calculating results in a calculator interface, with the ability to trigger calculation by pressing the Enter key.
 */
function deleteMe() {
  document.getElementById("Myresult").value = "";
}
function Calculator(newValue) {
  document.getElementById("Myresult").value += newValue;
}
/**
 * The function `Answer` retrieves a value from an HTML element, evaluates it as a JavaScript expression, and then updates the HTML element with the result.
 */
function Answer() {
  let value1 = document.getElementById("Myresult").value;
  let value2 = eval(value1); //built in function that calculate by default
  document.getElementById("Myresult").value = value2;
}

/* The code `document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    Answer();
  }
});` is adding an event listener to the document object for the "keypress" event. When a key is pressed, the function specified as the second argument will be executed. */
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    Answer();
  }
});
