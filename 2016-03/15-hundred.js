/****MARKDOWN
Happy Wednesday Daily Programmers!

Write a program that outputs all possibilities to put + or - or nothing between
the numbers 1,2,…,9 (in this order) such that the result is 100.
For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.
****/

// Here's my (potentially terrible?) brute force approach.
// Don't try this at home, folks :)

var numbers = 123456789;
var sum = 100;
var results = [];

// Break each digit into a string array for easy modification
var numbers_array = (numbers.toString()).split("");
var equation = (numbers.toString()).split("");

// Recursively build an equation using an array
function build_equation(pos) {
  // If not at last digit...
  if (pos < (numbers_array.length)-1) {
    // First, exhaust (and overwrite) all remaining digits
    for (let position = pos; position < (numbers_array.length)-1; position++) {
      // Modifiy starting with next digit
      // console.log("for pos: " + pos);
      pos++;
      // Then, exhaust all 3 possible operations
      // NOTE: The for + if loops below are nice for organization;
      //   but unecessary because it's comparison-expensive for operation
      // for (var operation = -1; operation < 2; operation++) {
      //   if (operation == -1) {
          equation[position] = numbers_array[position] + "-";
          // console.log("position " + (position+1) + ": " + equation[position]);
          build_equation(pos);
      //  } else if (operation == 0) {
          equation[position] = numbers_array[position];
          // console.log("position " + (position+1) + ": " + equation[position]);
          build_equation(pos);
      //  } else { //(operation == 1) {
          equation[position] = numbers_array[position] + "+";
          // console.log("position " + (position+1) + ": " + equation[position]);
          build_equation(pos);
      //  }
    // }
    }
  }
  // Handle fully built equation
  else {
    // console.log("generated equation: " + equation);
    let final_equation = equation.join("");
    // console.log("operation result: " + eval(final_equation));
    // If result is 100, add to results array
    if (eval(final_equation) == 100) {
      let duplicate = false;
      results.forEach(function(result) {
        if (final_equation == result) {
          duplicate = true;
        }
      });
      if (!duplicate) {
        results.push(final_equation);
      }
    }
  }
}

// Start at position 0
build_equation(0);

// Log output
results.forEach(function(result) {
  console.log(result);
});
