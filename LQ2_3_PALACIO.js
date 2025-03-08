console.log("List of Choices:");
console.log("A. Pepsi Cola - $1.25 each");
console.log("B. Coca Cola - $1.50 0each");
console.log("C. Apple (per kg) - $2.50 per kg");
console.log("D. Orange (per kg) - $2.50 per kg");
console.log("E. Hotdogs (per kg) - $5.50 per kg");

var item_choice = prompt("Enter your item choice (A, B, C, D, or E):").toUpperCase();
var qty = parseFloat(prompt("Enter the quantity:"));

var price_per_unit;
var item_name;

switch (item_choice) {
    case 'A':
        item_name = "Pepsi Cola";
        price_per_unit = 1.25;
        break;
    case 'B':
        item_name = "Coca Cola";
        price_per_unit = 1.50;
        break;
    case 'C':
        item_name = "Apple (per kg)";
        price_per_unit = 2.50;
        break;
    case 'D':
        item_name = "Orange (per kg)";
        price_per_unit = 2.50;
        break;
    case 'E':
        item_name = "Hotdogs (per kg)";
        price_per_unit = 5.50;
        break;
    default:
        alert("Invalid choice. Please enter A, B, C, D, or E.");
        console.log("Invalid choice. Please restart the program.");
        price_per_unit = null;
}

if (price_per_nit !== null && !isNaN(qty) && qty > 0) {
    var total_price = price_per_Unit * qty;
    alert('The Total Price of the order ${item_name} x ${qty}: $${total_price.toFixed(2)}');
} else {
    alert("Invalid quantity. Please enter a valid number greater than 0.");
}