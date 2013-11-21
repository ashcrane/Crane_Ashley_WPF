// Ashley Crane  11/21/13  Functions_Wacky


var budget = 7000  // A variable for your budget.
var jetPackPrice = 6000  //  A variable for the price of a jet pack.
var paycheck = 10000  // A variable for how much your paycheck is.

function jetPack(){  // The function for the jet pack.
    if(budget > jetPackPrice && paycheck > 7000){  // If your budget is greater than the price of the jet pack and the paycheck amount then you get a jet pack.
        console.log("Get ready to touch the sky! You're getting a jet pack!"); // Will print to console if the condition is met
    }else{
        console.log("You'll have to keep your feet on the ground right now."); // Will print to console if condition is not met.
    } return jetPack;
}

jetPack(); // Calls the function to start.