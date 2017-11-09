// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================


var numbers = process.argv.slice(2);
//slicing the array starting at 2, where commands start
numbers.sort(function(a, b) { return a - b; });
console.log(numbers);