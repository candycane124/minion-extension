var links = document.getElementsByTagName('a')

for (lin of links) {
    lin.href = `${browser.runtime.getURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1")}`
}