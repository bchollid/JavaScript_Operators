console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let a = 20;
let b = 4;
let add = a+b;
let minus = a-b;
let multiply = a*b;
let dividing = a/b;
console.log("Exercise 1: ")
console.log("Add: " + add);
console.log("Minus: " + minus);
console.log("Multiply: " + multiply);
console.log("Dividing: " + dividing);

// Exercise 2
//Quiz Answers:
// What is the value of: num + str? 1111
// What is the value of: num + str2? 11eleven
// What is the value of: num + isPresent? 11true
// What is the value of: firstName + num? Frodo11
// What is the value of: isPresent + str? true11
// What is the value of: firstName + lastName? FrodoBaggins
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";
console.log("Exercise 2: ")
console.log("Question 1: " + num+str);
console.log("Question 2: " + num+str2);
console.log("Question 3: " + num+isPresent);
console.log("Question 4: " + firstName+num);
console.log("Question 5: " + isPresent+str);
console.log("Question 6: " + firstName+lastName);

// Exercise 3
// What is the value of: val == str3? True (5 is equal to "5". This is true.)
// What is the value of: val === str3? False (5 is equal to "5", however, the variable type is not the same. So false.)
// What is the value of: !isPresent2? True (The opposite of false is true.)
// What is the value of: (“eleven” == str4 && val >= str3)? False ("eleven" is not equal to "five", and because it's an AND operator, both expressions would need to be true. But the first expression is false, so false.)
// What is the value of: (!isPresent2 || isPresent2)? True (!isPresent2 is true as we already saw before, and because we have an OR operator, we only need one of these expressions to be true for it to be true.)
// What is the value of: 0 == false? true (0 returns false in a boolean expression, so here it is true.)
// What is the value of: 0 === false? false (0 returns false, however, we're using a strict equality operator so the two variable types need to match. Here, they do not. So false.)
// What is the value of: 0 != false? false (0 returns false. But this is an inequality operator. So it's checking if false is equal to true. Which is false)
// What is the value of 0 !== false? true (This is a strict inequality operator. So 0 is a number. Which means it's not a boolean. So it would be false, but because it's an inequality operator, it's true. )
let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;

console.log("Exercise 3: ");
console.log(val == str3);
console.log(val === str3);
console.log(!isPresent2)
console.log("eleven" == str4 && val >= str3)
console.log(!isPresent2 || isPresent2)
console.log(0 == false)
console.log(0 === false)
console.log(0 != false)
console.log(0 !== false)

