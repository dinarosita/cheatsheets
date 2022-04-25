function sumNumbers () {
    let sum = 0;
    let statement = "";
    while (true) {
        const value = +prompt("Enter a non-zero number:");
        if (!value) break;
        sum += value;
        if (statement) statement += " + ";
        statement += value;
    }
    if (statement) alert (statement + " = " + sum);
}

const sumButton = document.getElementById("sumButton");
sumButton.addEventListener("click", sumNumbers);