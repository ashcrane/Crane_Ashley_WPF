// Ashley Crane  11/7/13  Expressions:Industry

// How much does it cost a month to print 1,600 pages from a printer?

// Cost of total toner cartridges divided by the estimated number of pages per paper = cost per page.
// Cost per page multiplied by the number of copies.


var cartridgeCost = 80; // The cost of the toner cartridges

var estimatedYield = 5000; //The estimated number of pages that can be printed.

var numberOfCopies = 1600; // The number of copies printed in a month.

var costPerPage = cartridgeCost/estimatedYield;  // The product will equal the cost per page.

 costPerPage *= numberOfCopies;  // The cost per page is multiplied by the number of copies printed for the month.

console.log("The cost to print 1,600 pages a month is " + costPerPage + ".");  // The result of Cost per page multiplied by 1600 printed in the console.