/* navArticle.js
About: automatically generated element's name as the hover display value, by assigning title attribute.
Requirements: nothing
*/

function assignTitle () {
    const genA = document.body.children;
    for (let i = 0; i < genA.length; i++) {
        const genAName = genA[i].tagName;
        const genATitle = "<" + genAName.toLowerCase() + ">";
        genA[i].title = genATitle;

        /* Title the second degree children */
        const genB = genA[i].children;
        if (genB.length > 0) {
            for (let j = 0; j < genB.length; j++) {
                const genBName = genB[j].tagName;
                const genBTitle = "<" + genBName.toLowerCase() + ">"; 
                genB[j].title = genATitle + genBTitle;
                
                /* Title the third degree children */
                const genC = genB[j].children;
                if (genC.length > 0) {
                    for (let k = 0; k < genC.length; k++) {
                        const genCName = genC[k].tagName;
                        const genCTitle = "<" + genCName.toLowerCase() + ">"; 
                        genC[k].title = genATitle + genBTitle + genCTitle;
                        
                        /* Title the fourth degree children */
                        const genD = genC[k].children;
                        if (genD.length > 0) {
                            for (let l = 0; l < genD.length; l++) {
                                const genDName = genD[l].tagName;
                                const genDTitle = "<" + genDName.toLowerCase() + ">"; 
                                genD[l].title = genATitle + genBTitle + genCTitle + genDTitle;
                                
                            }
                        } else {
                            /* Do nothing */
                        }
                    }
                } else {
                    /* Do nothing */
                }
            }
        } else {
            /* Do nothing */
        }
    }    
};

assignTitle();