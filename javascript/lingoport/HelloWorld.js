var greeting = "Hello";
greeting += " World!";

var today = new Date();
var dateString = today.getMonth() + "/" + today.getDay() + "/" + today.getYear();

document.write("<p>" + greeting + "</p>");
document.write("<p>" + "Displaying date in M/dd/yy format:" + "</p>");
document.write("<p>" + "Today is " + dateString + "</p>");
document.write("<p>" + "Parsing '2.570', it's a very small number in the U.S, but very large in Europe!")
document.write(" Result: " + parseFloat("2.570") + "</p>")

var logMessage = "Logging Message - Don't translate me";
console.log(logMessage);

console.log("This change added to the file on 2021-05-19");
console.log("This change added to the file on 2021-07-01 to test Jenkins.");
