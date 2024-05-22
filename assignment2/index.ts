/*Question 1
Create an array named fruits that contains the following string 
elements: "apple", "banana", "mango", "orange".*/

let fruits = ["apple","banana","mango","orange"];
console.log(fruits);

/*Question 2
Declare an array named numbers that can contain only number 
elements and initialize it with the values 10, 20, 30, and 40.*/

let numbers:number[] = [10, 20, 30, 40];
console.log(numbers);

/*Question 3
Access the third element of the fruits array and assign it to a 
variable named thirdFruit.*/

let thirdFruit = fruits[2];
console.log(thirdFruit);

/*Question 4
Change the second element of the numbers array to 25.*/

numbers[1] = 25;
console.log(numbers,"after chsnging second element to 25");

/*Question 5
Add the element "grape" to the end of the fruits array using the 
method.*/

// add the element grape to the end of fruits array using push method

fruits.push("grape");
console.log(fruits,"after adding grape in end");

/*Question 6
Remove the last element from the fruits array using the 
method and assign it to a variable named lastFruit.*/

// Remove last element from fruits array using pop method

let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits,"after removing last element");

/*Question 7
Remove the first element from the fruits array using the 
method and assign it to a variable named firstFruit.*/

// remove first element from fruit array and assign this value to variable named firstFruit

let firstFruit = fruits.shift();

console.log(firstFruit);
console.log(fruits,"After removing first element of array");

/*Question 8
Add the element "kiwi" to the beginning of the fruits array 
using the method.*/

// add kiwi to the beginning of fruits array using unshift method

fruits.unshift("kiwi"); 
console.log(fruits,"after adding kiwi at start of array");

/*Question 9
Remove 2 elements from the fruits array starting from index 1 
using the method.*/

// Remove 2 elements starting from index 1 using splice()method

fruits.splice(1,2);
console.log(fruits,"after removing elements of index 1 and 2");

/*Question 10
Insert the elements "pineapple" and "pear" at index 2 of the 
fruits array using the method.*/

// Insert elements using splice() method

fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits,"after inserting 2 elements");

/*Question 11
Create a new array named citrusFruits that contains the first 
two elements of the fruits array using the method.*/

// create a new array using slice method

let citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits,"New array that contains first two elements of fruits array");

/*Question 12
Create a new array named lastTwoFruits that contains the last 
two elements of the fruits array using the method.*/

// create a new array using slice method

let lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits,"new array that contains last two elements of fruit array");


















