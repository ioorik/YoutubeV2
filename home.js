const search_bar = document.getElementById("search_bar");
const search = document.getElementById("search_text")
let on_search_bar = false
let searching = false
search_bar.onmousedown = function () {
    search_bar.style.borderColor = "rgb(0, 100, 255)"
    on_search_bar = true
    searching = true
}
search_bar.onmouseleave = function () {
    on_search_bar = false
}

document.onmousedown = function () {
    if (!on_search_bar) {
        search_bar.style.borderColor = "rgb(73, 73, 73)"
        searching = false
    }
}
let space = false
document.addEventListener('keydown', (key) => {
    let k = key.key;

    if (searching) {
        if (k.toLowerCase() == "backspace") {
            let text = ""
            for (let i = 0; i < search.innerText.length - 1; i++) {
                text += search.innerText[i]
            }
            search.innerText = text
        }
        else if (k.length < 2) {
            if (k == " ") {
                space = true
            }
            else {
                if (space) {
                    search.innerText += " " + k
                    space = false
                }
                else {
                    search.innerText += k
                }
            }
        }
    }
})