// Learning JS Loop Break

const contacts = ["Adam:121212", "Ben:343434", "Chris:565656", "Daniel:787878", "Ebert:909090"];
const searchResult = document.getElementById("searchResult");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const searchName = searchInput.value.toLowerCase();
    searchInput.value = "";
    searchInput.focus();
    if (searchName === "") {
        searchResult.textContent = "Please enter a name.";
    } else {
        for (const contact of contacts) {
            const splitContact = contact.split(":");
            if (splitContact[0].toLowerCase() === searchName) {
                searchResult.textContent = `${splitContact[0]}\'s number is ${splitContact[1]}.`;
                break;
            }
            searchResult.textContent = "Contact not found.";
        }
    }    
});