// countdown exercise from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
// webpage: js_loops.html

function dowhileCountdown () {
    const output = document.getElementById("dowhileCountdownOutput"); 
    const button = document.getElementById("dowhileCountdownButton");

    if (output.textContent === "") {
        let i = 10;
        do {
            const para = document.createElement("p");
            const output = document.getElementById("dowhileCountdownOutput");        
    
            if (i === 10) {
                para.textContent = `Countdown ${i}`;
            } else if (i === 0) {
                para.textContent = "Blast off!";
            } else {
                para.textContent = i;
            }
    
            output.appendChild(para);
            i--;
        } while (i >= 0);
        button.textContent = "Close countdown";
    } else {
        output.textContent = "";
        button.textContent = "Start countdown";
    }
}

const dowhileCountdownButton = document.getElementById("dowhileCountdownButton");
dowhileCountdownButton.addEventListener("click", dowhileCountdown);