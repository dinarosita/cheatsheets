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

function getElement () {
    let element = document.querySelector("#userElement").value;
    element = element.toUpperCase();
    return element;
}

function refreshColor (elem) {
    if (elem.style.backgroundColor === "mistyrose") {
            elem.style.backgroundColor = null;
    }
    Array.from(elem.children).forEach(refreshColor);
}

function scanElement (elem) {

    if (elem.tagName === getElement()) {
        elem.style.backgroundColor = "mistyrose";
    }
    Array.from(elem.children).forEach(scanElement);
}

function highlightElement () {
    refreshColor(document.body);
    scanElement(document.body);
}

function hoverElement (elem) {

    /* Assign title */
    const elemTitle = "<" + elem.tagName.toLowerCase() + ">";
    const parentTitle = elem.parentElement.title;
    elem.title = parentTitle + elemTitle;    

    /* Check for children and assign title */
    Array.from(elem.children).forEach(hoverElement);
};

createSearchBox ();
hoverElement (document.body);
submitButton.addEventListener("click", highlightElement);