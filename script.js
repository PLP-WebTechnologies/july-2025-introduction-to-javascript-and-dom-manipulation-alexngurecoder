// Part 1: Variables & Conditionals
// This function checks if a number is positive, negative, or zero
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive number");
  } else if (num < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero!");
  }
}
// Test examples
checkNumber(5);
checkNumber(-3);
checkNumber(0);


// Part 2: Functions
// This function greets a person by name
function greet(name) {
  return "Hello, " + name + "!";
}

// This function uses greet() and prints the message
function sayHello() {
  console.log(greet("Alex"));
}
// Test example
sayHello();

// Arrow function that squares a number
const square = (num) => {
  return num * num;
};

// Test examples
sayHello();
console.log("Square of 4 =", square(4));
console.log("Square of 7 =", square(7));


// Part 3: Loops
// Example 1: for loop (prints numbers 1 to 5)
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Example 2: while loop (prints a countdown)
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}


//  DOM Manipulation
// 1. Change text inside a paragraph
function changeText() {
  document.getElementById("domText").innerText = "The text has been changed!";
}

// 2. Toggle color (add/remove red class)
function toggleColor() {
  document.getElementById("colorText").classList.toggle("red");
}

// 3. Add a new paragraph to the page
function addMessage() {
  let newP = document.createElement("p");
  newP.innerText = "This message was added dynamically!";
  document.getElementById("messageBox").appendChild(newP);
}
