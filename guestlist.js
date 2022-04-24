// Guestlist exercise from MDN https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown
// js_loops.html

const guestList = [];
const rejectList = [];

function processGuest () {  
    const guestInput = document.getElementById("guestInput");
    const comment = document.getElementById("guestComment");
    const guestOutput = document.getElementById("guestOutput");
    const rejectOutput = document.getElementById("rejectOutput");

    const rawName = guestInput.value;
    const newApplicant = rawName[0].toUpperCase() + rawName.slice(1);

    guestInput.value = "";
    guestInput.focus();
    comment.textContent = "";

    if ((newApplicant === "Lola") || (newApplicant === "Phil")) {
        let addReject = true;
        comment.textContent = `Sorry, ${newApplicant}, please see Admin to register.`;
        for (reject of rejectList) {
            if (newApplicant === reject) {
                addReject = false;
                break;
            }
        }
        if (addReject) {
            rejectList[rejectList.length] = newApplicant;
        }
    } else {
        let addGuest = true;
        for (guest of guestList) {
            if (newApplicant === guest) {
                comment.textContent = `Sorry, ${newApplicant}. That name has been registered.`;
                addGuest = false;
                break;
            }
        }
        if (addGuest) {
            guestList[guestList.length] = newApplicant;        
            comment.textContent = `Hello, ${newApplicant}! Your request is approved.`;
        }
    }

    if (guestList.length !== 0) {
        guestList.sort();
        guestOutput.textContent = `Registered guests: `
        for (let i = 0; i < guestList.length; i++) {
            if (i === 0) {
                guestOutput.textContent += guestList[i];
            } else if (i === (guestList.length - 1)) {
                if (guestList.length === 2) {
                    guestOutput.textContent += ` and ${guestList[i]}.`;
                } else {
                    guestOutput.textContent += `, and ${guestList[i]}.`;
                }
            } else {
                guestOutput.textContent += `, ${guestList[i]}`;
            }
        }
    }

    if (rejectList.length !== 0) {
        rejectList.sort();
        rejectOutput.textContent = `Please see Admin: `
        for (let i = 0; i < rejectList.length; i++) {
            if (i === 0) {
                rejectOutput.textContent += rejectList[i];
            } else if (i === (rejectList.length - 1)) {
                if (rejectList.length === 2) {
                    rejectOutput.textContent += ` and ${rejectList[i]}.`;
                } else {
                    rejectOutput.textContent += `, and ${rejectList[i]}.`;
                }
            } else {
                rejectOutput.textContent += `, ${rejectList[i]}`;
            }
        }
    }
}

const guestButton = document.getElementById("guestButton");
guestButton.addEventListener("click", processGuest);