// Learning JS Loop Continue

const squareInput = document.getElementById("squareInput");
const squareButton = document.getElementById("squareButton");
const squareResult = document.getElementById("squareResult");

squareButton.addEventListener("click", () => {
    let max = squareInput.value;
    squareInput.value = "";
    squareInput.focus();
    squareResult.textContent = `Squares up to ${max}: `;
    if ((max === "") || (isNaN(max) === true)) {
        squareResult.textContent = "Please enter a number.";
    } else {
        for (let i = 1; i <= max; i++) {
            let sqrtNum = Math.sqrt(i);
            if (Math.floor(sqrtNum) !== sqrtNum) {
                continue;
            }
            squareResult.textContent += `${i} `;
        }
    }
});