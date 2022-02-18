function makeTitle (elem) {
    const elemId = elem.tagName;
    const elemTitle = "<" + elemId.toLowerCase() + ">";
    elem.title = elemTitle;
}


const elements = Array.from(document.body.children);
elements.forEach(makeTitle);