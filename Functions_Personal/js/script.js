// Ashley Crane  11/21/13   Functions_Personal

// What is the total area of 12 pies? For the sake of the argument we will say that the all the pies are exactly the same size.
// To find the area of a circle the formula is area = pi * r squared then you would multiply the answer by 12 to find the area of 12 pies.
//
var areaOfPies = function(pi, r, r){ // The function to calculate the area of the pies.
    var area = pi * r * r * 12;  // The calculation of the area of a circle.
    return area;                // To return the value.
}

var a = areaOfPies(3.14, 6, 6); // A variable that has the parameters for the formula of the area of a circle.

console.log("The total area of the pie is " + a + "."); // Will print to console the total area of 12 pies.

(a < 400) ? console.log("Did you know that the area of one pie is 113.04?") : console.log("That is a huge area!"); // A ternary of the if and else conditional for the area of 12 pies.