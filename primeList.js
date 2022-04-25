function listPrime () {
    const primeListInput = document.getElementById("primeListInput");
    const max = primeListInput.value;

    const output = document.getElementById("primeListOutput");
    output.textContent = "";

    primeListInput.value = "";
    primeListInput.focus();

    // assuming numbered entered is an integer >= 2

    number: for (let n = 2; n <= max; n++) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) continue number;
        }
        output.textContent += n + " ";
    }
}

const primeListButton = document.getElementById ("primeListButton");
primeListButton.addEventListener("click", listPrime)