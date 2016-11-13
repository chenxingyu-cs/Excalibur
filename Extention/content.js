// alert($(".question-title h3").text().trim())
$("#button1").click(myFunction);
var myVar;

function myFunction() {
  myVar = setInterval(function(){ myTimer() }, 1000);
  // alert($("#result-state").text())
}

function myTimer() {
  var currentResult = $("#result-state").text().trim();
  if (currentResult != "Pending" && currentResult != "Judging") {
    clearInterval(myVar);
    var currentResult = $("#result-state").text().trim();
    var problemTitle = $(".question-title h3").text().trim()
    alert(problemTitle + ": " + currentResult);
  }
}


function myStopFunction() {
    clearInterval(myVar);
}
