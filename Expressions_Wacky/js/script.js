// Ashley Crane  11/07/13  Expressions: Wacky

// If a woodchuck got paid 4 dollars per log chucked, how much wood would a woodchuck chuck to make 400 dollars? 600 dollars? 800 dollars?

var moneyEarned  = [400, 600, 800]; // An array of the money that is earned.

var payPerLog = 4 // Amount of money that is earned per log.

var total = moneyEarned[0] + moneyEarned[1] + moneyEarned[2]; // Added all the money earned together

var amountOfLogs = total /= payPerLog; // The Pay per Log is divided by the total.

console.log(" The total amount of logs the woodchuck needs to chuck for 400, 600, and 800 dollars is " + amountOfLogs + "."); // The total amount of logs needed to chuck is printed to the console.