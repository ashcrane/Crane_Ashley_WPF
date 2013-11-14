// Ashley Crane  11/14/13 Conditional-Personal

var budget = prompt("What is your budget?");      // This is the budget for the month.

var costOfKarate = prompt("What is your karate class cost?");    //This is the cost of taking Karate classes.

var freeTime = prompt("How much free time do you have?");         // Free time that you have left in the day converted into minutes instead of hours.


// If the cost of Karate is less than the budget the console will print "Have fun at Karate!"

if(costOfKarate <= budget){
    console.log("Have fun at Karate!");

}else if (freeTime > costOfKarate){  // If the free time you have is greater than or equal to the cost of Karate the console will print " You can just squeeze in some classes!"
    console.log("You can just squeeze in some classes.");
} else {
    console.log("Sorry, you can't take classes right now."); // If neither the If or the else if are true, then the console will print out " Sorry, you can't take classes right now."
}