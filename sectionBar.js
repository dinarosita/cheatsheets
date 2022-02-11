// sectionBar.JS is a script to generate section bar containing toggle section buttons dynamically with display block as the default. For element tags, class and id naming, check out css_grid.html.

const sections = document.querySelectorAll("section");
console.log({sections});

for (let i = 0; i < sections.length; i++) {
    console.log("Button " + (i+1));

    const sectionID = sections[i].classList.value;
    console.log("ID: " + sectionID);

    const sectionButton = document.createElement("input");
    sectionButton.setAttribute("id", sectionID);
    sectionButton.setAttribute("type", "button");
    sectionButton.setAttribute("class", "on");

    const sectionTitle = sections[i].querySelector("h2").textContent;
    console.log("Title: " + sectionTitle);
    sectionButton.setAttribute("value", sectionTitle);

    const location = document.querySelector("#sectionBar");
    location.appendChild(sectionButton);
}