// Ashley Crane  11/14/13  Conditional-Industry


// What to do if your copies are coming out with lines on them when you scan the paper into the glass top of the copier.


var scanGlass = false;  // a variable for if you scanned your paper to be copied using the glass scanner on top of the copier.

var clean;


clean = (scanGlass === true) ? "Clean the slit glass, it probably has something stuck to the glass. " : "Contact a repair technician, it may be something other than the slit glass.";

console.log(clean);