/* navSection.js
About: automatically generated navigation bar of sections. Styling class included.
Requirements: 
1. <nav id="navMenu"></nav>
2. <section id="section1_name">
   ID format: lowercase, _ separated. Will be automatically modified into button title.
*/

function makeTitle (id) {
    let title = id;
    title = title.replace(/_/, " ");
    title = title[0].toUpperCase() + title.substring(1);
    return title;
};

function makeNavUl () {
    /* Generate and append <ul> in <nav id="navMenu"> */
    const navUl = document.createElement("ul");
    navUl.id = "navUl"
    document.querySelector("#navMenu").appendChild(navUl);
    document.querySelector("#navMenu").className = "html-nav";
}

function sectionNavBar (sect) {
    /* Grab section id and create title */
    const sectionID = sect.id;
    const sectionTitle = makeTitle(sectionID);

    /* Generate and append <li> */
    const navLi = document.createElement("li");
    navLi.id = sectionID + "Button";
    document.querySelector("#navUl").appendChild(navLi);

    /* Generate and append <a> */
    const navA = document.createElement("a");
    navA.href = `#${sectionID}`;
    navA.textContent = sectionTitle;
    navLi.appendChild(navA);
};

makeNavUl();
document.querySelectorAll("section").forEach(sectionNavBar);