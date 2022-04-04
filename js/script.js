const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=on]")

const getStyle = (element, style) => 
window
.getComputedStyle(element)
.getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    leftLogin: getStyle(html, "--left-login"),
    cardLogin: getStyle(html, "--card-login"),
    bgInput: getStyle(html, "--bg-input"),
    inputColor: getStyle(html, "--input-color"),
    cardColor: getStyle(html, "--card-color")
}

const lightMode = {
    bg: '#fff',
    leftLogin: '#080808',
    cardLogin: '#fff',
    bgInput: '#fff',
    inputColor: '#080808',
    cardColor: '#37b873'
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
        )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})