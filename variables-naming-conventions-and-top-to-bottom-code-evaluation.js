/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let _name = "Alice"; //changed variable from a to _name
let numOfItems = 5; //changed variable from b to numOfItems
let total = 20; //changed variable from c to total
let statement = _name + " bought " + numOfItems + " items for $" + total + "."; //changed d to statement and updated variables

console.log(statement);

let avgCost = total / numOfItems;
let statement2 = _name + " spent $" + avgCost + " per item.";

console.log(statement2);