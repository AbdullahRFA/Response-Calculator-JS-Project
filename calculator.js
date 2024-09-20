function deleteMe() {
  document.getElementById("Myresult").value = "";
}
function Calculator(newValue) {
  document.getElementById("Myresult").value += newValue;
}
function Answer() {
  let value1 = document.getElementById("Myresult").value;
  let value2 = eval(value1); //built in function that calculate by default
  document.getElementById("Myresult").value = value2;
}
