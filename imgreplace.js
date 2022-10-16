//console.log("online");

var images = document.getElementsByTagName('img')

let replacements = ["./assets/minion1.png","./assets/minion2.jpg","./assets/minion3.jpg","./assets/minion4.jpg","./assets/minion5.jpg","./assets/minion6.jpg","./assets/minion7.jpg"]

for (elt of images) {
    var imgReplacement = replacements[Math.floor(Math.random() * replacements.length)]
    elt.src = `${browser.runtime.getURL(imgReplacement)}`
    elt.alt = 'minion'
}

document.body.style.border = "5px solid #0A75BC";
document.body.style.color = "#FCE029";
