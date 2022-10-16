console.log("BEGIN MAIN.JS")

const textMap = sortedTextMap;

let regexs = new Map();
for (let word of textMap.keys()) {
  regexs.set(word, new RegExp(word, 'gi'));
}

/**
 * Substitutes emojis into text nodes.
 * If the node contains more than just text (ex: it has child nodes),
 * call replaceText() on each of its children.
 *
 * @param  {Node} node    - The target DOM Node.
 * @return {void}         - Note: the emoji substitution is done inline.
 */
function replaceText (node) {
    console.log("BEGIN REPLACETEXT()")

    if (node.nodeType === Node.TEXT_NODE) {
    
        if (node.parentNode &&
            node.parentNode.nodeName === 'TEXTAREA') {
        return;
        }

        let content = node.textContent;

        for (let [oldWord, newWord] of textMap) {
        const regex = regexs.get(oldWord);

        content = content.replace(regex, newWord);
        }

        node.textContent = content;
    }
    else {
        for (let i = 0; i < node.childNodes.length; i++) {
        replaceText(node.childNodes[i]);
        }    
    }
}

replaceText(document.body);

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
            const newNode = mutation.addedNodes[i];
            replaceText(newNode);
        }
        }
    });
});
observer.observe(document.body, {
    childList: true,
    subtree: true
});