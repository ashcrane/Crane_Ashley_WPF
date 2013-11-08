// Ashley Crane 11/6/2013 Expressions:Personal

//I am finding the average of my final grades in the classes I have taken so far. The formula for the average is the sum of the grades divided by the number of classes I have taken so far.

var digLit = prompt("Please enter your Digital Literacy final grade."); // This will be the final grade of Digital Literacy.

var pyp = prompt("Please enter your Psychology of Play final grade.");  // This will be the final grade of Psychology of Play.

var omdt = prompt("Please enter your Overview of Media Design and Technology."); //This will be the final grade for Overview of Media Design and Technology.

var result = (Number(digLit) + Number(pyp) + Number(omdt))/3; // The grades are now added together and then divided by the number 3.

math.round(result)

console.log(result);
alert("The overall average of the classes you have taken is " +  result)