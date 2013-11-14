// Ashley Crane  11/14/13  Conditional-Industry


// What to do if your copies are coming out with lines on them when you scan the paper into the glass top of the copier.


var scanGlass = false;  // a variable for if you scanned your paper to be copied using the glass scanner on top of the copier.

var whatToDo;

// This is a ternary to see if the scanGlass variable is true or false. The statement that will be printed to console if true is on the right and the statement that will be printed if it is false is on the left of the colon.


whatToDo = (scanGlass === true) ? "Clean the slit glass, it probably has something stuck to the glass. " : "Contact a repair technician, it may be something other than the slit glass.";



console.log(whatToDo); // This will print to the console the true or false statement for clean.