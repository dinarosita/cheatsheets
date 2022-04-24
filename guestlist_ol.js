// guestList exercise from MDN https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown
// Lists displayed as numbered list (ol)
// js_loops.html

const guestList2 = [];
const rejectList2 = [];

function processGuest2 () {  
    const guestInput2 = document.getElementById("guestInput2");
    const comment = document.getElementById("guestComment2");
    const guestOutput2 = document.getElementById("guestOutput2");
    const rejectOutput2 = document.getElementById("rejectOutput2");

    let newApplicant = guestInput2.value;
    newApplicant = newApplicant.trim();
    newApplicant = newApplicant.toLowerCase();
    newApplicant = newApplicant[0].toUpperCase() + newApplicant.slice(1);

    guestInput2.value = "";
    guestInput2.focus();
    comment.textContent = "";

    if ((newApplicant === "Lola") || (newApplicant === "Phil")) {
        let addReject = true;
        comment.textContent = `Sorry, ${newApplicant}, please see Admin to register.`;
        for (reject of rejectList2) {
            if (newApplicant === reject) {
                addReject = false;
                break;
            }
        }
        if (addReject) {
            rejectList2[rejectList2.length] = newApplicant;

            if (rejectList2.length === 1) {
                rejectOutput2.textContent = "Please see Admin:"

                const newOl = document.createElement("ol");
                newOl.setAttribute("id", "rejectOl");
                rejectOutput2.appendChild(newOl);
            }

            const newLi = document.createElement("li");
            newLi.textContent = rejectList2[rejectList2.length - 1];

            const rejectOl = document.getElementById("rejectOl");
            rejectOl.appendChild(newLi);
        }

    } else {
        let addGuest = true;
        for (guest of guestList2) {
            if (newApplicant === guest) {
                comment.textContent = `Sorry, ${newApplicant}. That name has been registered.`;
                addGuest = false;
                break;
            }
        }
        if (addGuest) {
            guestList2[guestList2.length] = newApplicant;        
            comment.textContent = `Hello, ${newApplicant}! Your request is approved.`;

            if (guestList2.length === 1) {
                guestOutput2.textContent = "Registered guests:"

                const newOl = document.createElement("ol");
                newOl.setAttribute("id", "guestOl");
                guestOutput2.appendChild(newOl);
            }

            const newLi = document.createElement("li");
            newLi.textContent = guestList2[guestList2.length - 1];

            const guestOl = document.getElementById("guestOl");
            guestOl.appendChild(newLi);
        }
    }


}

const guestButton2 = document.getElementById("guestButton2");
guestButton2.addEventListener("click", processGuest2);