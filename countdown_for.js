// countdown exercise from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
// webpage: js_loops.html

function forCountdown () {
    const output = document.getElementById("forCountdownOutput"); 
    const button = document.getElementById("forCountdownButton");

    if (output.textContent === "") {
        for (let i = 10; i >= 0; i--) {
            const para = document.createElement("p");
            const output = document.getElementById("forCountdownOutput");        
    
            if (i === 10) {
                para.textContent = `Countdown ${i}`;
            } else if (i === 0) {
                para.textContent = "Blast off!";
            } else {
                para.textContent = i;
            }
    
            output.appendChild(para);
        }
        button.textContent = "Close countdown";
    } else {
        output.textContent = "";
        button.textContent = "Start countdown";
    }
}

const forCountdownButton = document.getElementById("forCountdownButton");
forCountdownButton.addEventListener("click", forCountdown);