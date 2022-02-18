/* hoverElement.js
Function: Displays all element tags by hovering.
Mechanism: Assigning element tag names to the element's title attribute. Browser displays element's title at the tooltip upon hovering.
Function is recursive from the chosen parent <body> element down to the very end tips where there's no more children elements.
Requirement: Nothing.
Made for: html_elements.js
Work for: any webpage by including searchElement2.js in <script> element or copying the script directly to the any page's console. */

function assignTitle (elem) {

    /* Assign title */
    const elemTitle = "<" + elem.tagName.toLowerCase() + ">";
    const parentTitle = elem.parentElement.title;
    elem.title = parentTitle + elemTitle;    

    /* Check for children and assign title */
    Array.from(elem.children).forEach(assignTitle);
};

assignTitle (document.body);