// Ashley Crane  11/21/13   Functions_Personal

// What is the total area of 12 pies? For the sake of the argument we will say that the all the pies are exactly the same size.
// To find the area of a circle the formula is area = pi * r squared.
//
var areaOfPies = function(pi, r, r){
    var area = pi * r * r * 12;
    return area;
}

var a = areaOfPies(3.14, 6, 6);

console.log("The total area of the pie is " + a + ".");

(a < 400) ? console.log("Did you know that the area of one pie is 113.04?") : console.log("That is a huge area!");