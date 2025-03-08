let create_matrix = prompt("Do you want to create a Matrix? (yes/no)").toLowerCase();

if (create_matrix === "yes") {
    let limit1 = parseInt(prompt("Enter the limit for the first loop:"), 10);
    let limit2 = parseInt(prompt("Enter the limit for the second loop:"), 10);
    let limit3 = parseInt(prompt("Enter the limit for the third loop:"), 10);

    let string1 = prompt("Enter the first string (word, char, number, symbol):");
    let string2 = prompt("Enter the second string (word, char, number, symbol):");
    let string3 = prompt("Enter the third string (word, char, number, symbol):");


    if (isNaN(limit1) || isNaN(limit2) || isNaN(limit3)) {
        console.log("Invalid input. Please enter numbers for the limits.");
    } else {
        console.log("\nGenerated Matrix:\n");

        for (let i = 0; i < limit1; i++) {
            for (let j = 0; j < limit2; j++) {
                for (let k = 0; k < limit3; k++) {
                    console.log(string1 + " " + string2 + " " + string3);
                }
                console.log("\n");
            }
            console.log("---------");
        }
    }
} else {
    console.log("Thank you, re-run the program if you change your mind.");
}