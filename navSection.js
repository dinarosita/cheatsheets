/* navSection.js
About: automatically generated navigation bar of sections. Requirement: Define id attribute of each section, and place HTML elements below under the main header element.
<nav class="html-nav">
    <ul id="navMenu">
    </ul>
</nav>
*/

function makeTitle (id) {
    let title = id;
    title = title.replace(/_/, " ");
    title = title[0].toUpperCase() + title.substring(1);
    return title;
};

function sectionNavBar (sect) {
    /* Grab section id and create title */
    const sectID = sect.id;
    const sectTitle = makeTitle(sectID);

    /* Generate and append <li> */
    const sectButton = document.createElement("li");
    sectButton.setAttribute("id", (sectID + "Button"));
    sectButton.setAttribute("class", "html-nav");

    const navList = document.querySelector("#navMenu");
    navList.appendChild(sectButton);

    /* Generate and append <a> */
    const buttonLink = document.createElement("a");
    buttonLink.setAttribute("href", `#${sectID}`);
    buttonLink.textContent = sectTitle;
    sectButton.appendChild(buttonLink);
};

document.querySelectorAll("section").forEach(sectionNavBar);