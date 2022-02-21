/* highlighElement.js
Function: 
Requirement: Nothing.
Made for: html_elements.js
Work for: any webpage just copy code to the console */

function createSearchBox () {
    const searchDiv = document.createElement("div");
    searchDiv.style.textAlign = "center";

    const searchBox = document.createElement("input");
    searchBox.id = "userElement";
    searchBox.type = "text";
    searchBox.name = "userElement";
    searchBox.placeholder = "element";
    searchBox.style.display = "inline block";

    const searchButton = document.createElement("button");
    const buttonLabel = document.createTextNode("Go");
    searchButton.id = "submitButton";
    searchButton.appendChild(buttonLabel);

    document.body.children[0].appendChild(searchDiv);
    searchDiv.appendChild(searchBox);
    searchDiv.appendChild(searchButton);
}

// function refreshColor (elem) {
//     if (elem.style.backgroundColor === "mistyrose") {
//         elem.style.backgroundColor = null;
//     }
//     Array.from(elem.children).forEach(refreshColor);
// }

function highlightElement () {

    // remove highlight of previous elements
    document.querySelectorAll(".highlighted").forEach(
        (elem) => {
            elem.style.backgroundColor = null;
            elem.classList.remove("highlighted");
        }
    );

    // highlight current elements
    let element = document.querySelector("#userElement").value;
    element = element.toUpperCase();
    document.querySelectorAll(element).forEach(
        (elem) => {
            elem.style.backgroundColor = "mistyrose";
            elem.classList.add("highlighted");
        }
    );
}

createSearchBox();
submitButton.addEventListener("click", highlightElement);

