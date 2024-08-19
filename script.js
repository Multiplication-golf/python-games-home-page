function submiting_form() {

  var fs = require('/fs.js');
  let myVar = document.getElementById("_Feedback_").value;
  fs.fileWrite("feedback.txt", myVar);
}