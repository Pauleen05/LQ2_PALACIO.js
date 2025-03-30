// Display the list of choices in the console
console.log("Choose an item:");
console.log("A. Pepsi Cola      Php 30.00");
console.log("B. Coca Cola       Php 35.00");
console.log("C. Apple (per kg)  Php 100.00");
console.log("D. Orange (per kg) Php 120.00");
console.log("E. Hotdogs (per kg) Php 180.00");

// Ask the user for their item choice
let itemChoice = prompt("Enter your item choice (A, B, C, D, or E):").toUpperCase();

// Ask for quantity
let quantity = parseInt(prompt("Enter the quantity to be ordered:"));

// Initialize total price
let totalPrice;

// Use switch statement to determine price
switch (itemChoice) {
    case "A":
        totalPrice = quantity * 30;
        alert("You ordered " + quantity + " Pepsi Cola(s). Total Price: Php " + totalPrice);
        break;
    case "B":
        totalPrice = quantity * 35;
        alert("You ordered " + quantity + " Coca Cola(s). Total Price: Php " + totalPrice);
        break;
    case "C":
        totalPrice = quantity * 100;
        alert("You ordered " + quantity + " kg of Apple(s). Total Price: Php " + totalPrice);
        break;
    case "D":
        totalPrice = quantity * 120;
        alert("You ordered " + quantity + " kg of Orange(s). Total Price: Php " + totalPrice);
        break;
    case "E":
        totalPrice = quantity * 180;
        alert("You ordered " + quantity + " kg of Hotdog(s). Total Price: Php " + totalPrice);
        break;
    default:
        alert("Invalid choice. Please enter A, B, C, D, or E.");
}
