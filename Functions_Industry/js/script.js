// Ashley Crane  11/21/13  Functions_Industry

// What is the percentage of toner you have used in your copier?

// formula to find percentage of toner used is percentage used = amt of pages copied divided by amt of page yield multiplied by 100.

var amtOfPages = prompt("How many pages have you copied?"); // A prompt for user to input the amount of pages copied.
var amtOfYield = prompt("How much page yield does your toner cartridge have?"); // A prompt for user to input the amount of pages the cartridge can yield.

function tonerPercentage(){   // The function for the toner percentage.
var percentage = amtOfPages / amtOfYield * 100; // The variable for the percentage of toner used.

    console.log("You have used " + percentage + " percent of the toner.");  // Print to console the amount of toner used.
    if(percentage > 75){
        console.log("Time for a new toner cartridge!");
    }else if(percentage == 50){
        console.log("You are half way through your toner.")
    }else{
        console.log("Happy copying!")
    }

}

tonerPercentage();