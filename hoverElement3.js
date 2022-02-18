function assignHover (elem) {
    makeTitle(elem);
    Array.from(elem.children).forEach(assignHover);
};

function makeTitle (elem) {
    const elemTitle = "<" + elem.tagName.toLowerCase() + ">";
    const parentTitle = elem.parentElement.title;
    elem.title = parentTitle + elemTitle;       /* element directory */
    /* elem.title = elemTitle; */ /*tip element only */
};

assignHover (document.body);