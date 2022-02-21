/* hoverElement.js
Function: Displays all element tags by hovering.
Requirement: Nothing.
Made for: html_elements.html
Work for: any webpage just copy code to the console */

function assignTitle (elem) {

    /* Assign title */
    const elemTitle = "<" + elem.tagName.toLowerCase() + ">";
    const parentTitle = elem.parentElement.title;
    elem.title = parentTitle + elemTitle;    

    /* Check for children and assign title */
    Array.from(elem.children).forEach(assignTitle);
};

assignTitle (document.body);