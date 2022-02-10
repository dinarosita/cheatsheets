// abcBar.JS is a script to generate uppercase alphabet navigation bar. For element tags, class and id naming, check out glossary.html

for (var i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
    const abcButton = document.createElement("a");
    abcButton.setAttribute("id", String.fromCharCode(i));
    abcButton.appendChild(document.createTextNode(String.fromCharCode(i)));
    abcButton.setAttribute("href", `#section${String.fromCharCode(i)}`);
    const location = document.querySelector("#abcBar");
    location.appendChild(abcButton);
    if (document.querySelector(`#section${String.fromCharCode(i)}`).classList.value === "empty") {
        document.querySelector(`#${String.fromCharCode(i)}`).style.backgroundColor = "lightgray";
        document.querySelector(`#${String.fromCharCode(i)}`).style.color = "white";
    }
}