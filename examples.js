// JSHelper Examples
// format;

var greeting = jsHelper.format("Welcome <0>!", "Kâmil"); 
  
console.log(greeting);  // Welcome Kâmil!
  


var format = "Welcome <0>! <0>, You earned <1> badge! Your current point is <2>. Yaay!";
  
var message = jsHelper.format(format, ["Kâmil", "Hello World", 50]);


console.log(message);  // Welcome Kâmil! Kâmil, You earned Hello World badge! Your current point is 50. Yaay!
