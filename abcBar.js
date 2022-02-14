// abcBar.JS is a script to generate uppercase alphabet navigation bar. For element tags, class and id naming, check out glossary.html

for (var i = 65; i <= 90; i++) {
    const abcButton = document.createElement("a");
    const character = String.fromCharCode(i);
    abcButton.setAttribute("id", character);
    abcButton.appendChild(document.createTextNode(character));
    abcButton.setAttribute("href", `#section${character}`);
    
    const location = document.querySelector("#abcBar");
    location.appendChild(abcButton);
    if (document.querySelector(`#section${character}`).classList.value === "empty") {
        document.querySelector(`#${character}`).style.backgroundColor = "lightgray";
        document.querySelector(`#${character}`).style.color = "white";
    }
}