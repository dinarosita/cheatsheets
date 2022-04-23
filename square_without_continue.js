// Learning JS Loop Without Continue

const squareInput2 = document.getElementById("squareInput2");
const squareButton2 = document.getElementById("squareButton2");
const squareResult2 = document.getElementById("squareResult2");

squareButton2.addEventListener("click", () => {
    let max = squareInput2.value;
    squareInput2.value = "";
    squareInput2.focus();
    squareResult2.textContent = `Squares up to ${max}: `;

    if ((max === "") || (isNaN(max) === true)) {
        squareResult2.textContent = "Please enter a number.";
    } else {
        let maxRoot = Math.floor(Math.sqrt(max));

        for (let i = 1; i <= maxRoot; i++) {
            squareResult2.textContent += `${i*i} `;
        }
    }   
});