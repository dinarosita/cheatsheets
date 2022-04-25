function choosePet () {
    const petInput = document.getElementById("petInput");
    let search = petInput.value;
    search = search.trim();
    search = search.toLowerCase();
    const petOutput = document.getElementById("petOutput");
    petOutput.textContent = "";

    let pets = ["dog", "cat", "goldfish", "tarantula", "rabbit", "mouse"];
    for (pet of pets) {
        if (search === pet) {
            const newPara = document.createElement("p");
            newPara.textContent = `It's a ${pet}!`;
            petOutput.appendChild(newPara);
            break;
        }
        const newPara = document.createElement("p");
        newPara.textContent = `It's not a ${pet}...`;
        petOutput.appendChild(newPara);
    }
}

const petButton = document.getElementById("petButton");
petButton.addEventListener("click", choosePet)