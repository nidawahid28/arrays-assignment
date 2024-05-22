"use strict";
/*Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to
manage object manipulation effectively.
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.*/
Object.defineProperty(exports, "__esModule", { value: true });
//2. Create an array of products
const products = [
    {
        name: "T-Shirt",
        price: 2000,
        inventory: {
            stock: 50,
            colorOptions: ["white", "black", "red"],
        },
    },
    {
        name: "Bag",
        price: 1000,
        inventory: {
            stock: 25,
            colorOptions: ["blue", "silver", "black"],
        },
    },
    {
        name: "Sweater",
        price: 2500,
        inventory: {
            stock: 30,
            colorOptions: ["red", "blue", "green"],
        },
    },
];
//3. Implement the 'changeColor'Function
function changeColor(product, newColor) {
    // Check if the new color is available in the products color option
    if (!product.inventory.colorOptions.includes(newColor)) {
        console.log(`Color ${newColor} is not available for ${product.name}.`);
        return;
    }
    // Adjust price based on new color
    if (newColor === 'red') {
        product.price *= 1.10;
        // Increase by 10% for red
    }
    else if (newColor === 'blue') {
        product.price *= 0.95;
        // decrease by 5% for blue
    }
    console.log(`The color of ${product.name} has been changed to ${newColor}. New price is ${product.price.toFixed(2)}.`);
}
// 4. Display product details
function displayProducts(products) {
    products.forEach(product => {
        console.log(`Product Name: ${product.name}`);
        console.log(`Price: Rs${product.price.toFixed(2)}`);
        console.log(`Stock:${product.inventory.stock}`);
        console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
        console.log(("---------------"));
    });
}
// Display initial products
displayProducts(products);
// Example of changing a product's color
changeColor(products[0], "red");
// Display products after changing color
displayProducts(products);
