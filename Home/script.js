
const search_bar = document.getElementById("search_bar");
const gemini = document.getElementById("gem");

search_bar.addEventListener('click', () => {
    if (search_bar.type == "button") {
        searchify()
    }
})

search_bar.addEventListener('change', () => {
    if (search_bar.value) {
        window.location.assign('http://127.0.0.1:8080/search?q=' + search_bar.value)
    }
})

gemini.addEventListener('click', () => {
    if (gemini.type == "button") {
        gemify()
    }
})

gemini.addEventListener('change', () => {
    if (gemini.value) {
        window.location.assign('http://127.0.0.1:8080/search?q=' + gemini.value + "&gemini=True")
    }
})

function gemify () {
    gemini.type = "text";
    gemini.placeholder = "Talk to Youtube";
    gemini.style.animationName = "fullGem";
    gemini.style.animationDuration = "1s";
    gemini.style.animationFillMode = "forwards";

    search_bar.type = "button";
    search_bar.placeholder = "";
    search_bar.value = ""
    search_bar.style.animationName = "minSer";
    search_bar.style.animationDuration = "1s";
    search_bar.style.animationFillMode = "forwards";
}

function searchify () {
    gemini.type = "button";
    gemini.placeholder = "";
    gemini.value = ""
    gemini.style.animationName = "minGem";
    gemini.style.animationDuration = "1s";
    gemini.style.animationFillMode = "forwards";

    search_bar.type = "text";
    search_bar.placeholder = "Search";
    search_bar.style.animationName = "fullSer";
    search_bar.style.animationDuration = "1s";
    search_bar.style.animationFillMode = "forwards";
}

function home () {
    window.location.replace("/")
}