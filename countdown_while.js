// countdown exercise from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
// webpage: js_loops.html

function whileCountdown () {
    const output = document.getElementById("whileCountdownOutput"); 
    const button = document.getElementById("whileCountdownButton");

    if (output.textContent === "") {
        let i = 10;
        while (i >= 0) {
            const para = document.createElement("p");
            const output = document.getElementById("whileCountdownOutput");        
    
            if (i === 10) {
                para.textContent = `Countdown ${i}`;
            } else if (i === 0) {
                para.textContent = "Blast off!";
            } else {
                para.textContent = i;
            }
    
            output.appendChild(para);
            i--;
        }
        button.textContent = "Close countdown";
    } else {
        output.textContent = "";
        button.textContent = "Start countdown";
    }
}

const whileCountdownButton = document.getElementById("whileCountdownButton");
whileCountdownButton.addEventListener("click", whileCountdown);