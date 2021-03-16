console.log("Hello, world!");
// VM62:1 Hello, world!


// 11.3.1

// Simple JavaScript console.log statement
function printHello();
// Uncaught SyntaxError: Unexpected token ';'

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  
// 11.3.2

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

console.log(doubleAddition(4, 5));

// 11.3.3

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

doubleAddition = (c, d) => addition(c, d) * 2;
// (c, d) => addition(c, d) * 2

console.log(doubleAddition(33, 25));
// 116

// 11.4.1

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
 // for i in user_list: print(i)


 // 11.4.2

 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
 for (var i = 0; i < vegetables.length; i++) {
}


 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
     console.log("I love " + vegetables[i]);
 }
 

for (var i = 0; i < 5; i++) {
   console.log("I am " + i);
}


// 11.5.4

// if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice
if (a date is entered) {
  Filter the default data to show only the date entered
};

// When we look at our complete if statement, it should appear as follows:
if (date) {
  filteredData = filteredData.filter(row => row.datetime === date);
};

