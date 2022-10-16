var images = document.getElementsByTagName('img')

let replacements = ["./assets/minion1.png","./assets/minion2.jpg","./assets/minion3.jpg","./assets/minion4.jpg","./assets/minion5.jpg","./assets/minion6.jpg","./assets/minion7.jpg","./assets/minion8.png","./assets/minion9.jpeg","./assets/minion10.jpg","./assets/minion11.jpg","./assets/minion12.jpg","./assets/minion13.jpg"]

for (elt of images) {
    var imgReplacement = replacements[Math.floor(Math.random() * replacements.length)]
    elt.src = `${browser.runtime.getURL(imgReplacement)}`
    elt.srcset = `${browser.runtime.getURL(imgReplacement)}`
    elt.alt = 'minion'
}
