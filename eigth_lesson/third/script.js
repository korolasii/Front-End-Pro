function askForNumber() {
    let userInput;

    for (let i = 0; i < 10; i++) {
        userInput = prompt("Enter a number greater than 100:");

        if (userInput > 100) {
            console.log("Last entered number:", userInput);
            return;
        }

        alert("The number must be greater than 100. Please try again.");
    }

    console.log("Last entered number:", userInput);
}

askForNumber();