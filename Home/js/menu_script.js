let toggled = true

function toggle () {
    if (toggled) {
        toggled = false;
        const menu = document.getElementById('menu');
        menu.style.animationName = "minimize";
        menu.style.animationDuration = "1s";
        menu.style.animationFillMode = "forwards";
        
        const buttons = document.getElementsByClassName('menu-button');
        for (let element of buttons) {
            element.style.width = "40px";
        };

        const text = document.getElementsByClassName('button-text');
        for (let element of text) {
            element.style.visibility = "hidden";
        };
    }
    else {
        toggled = true;
        const menu = document.getElementById('menu');
        menu.style.animationName = "maximize";
        menu.style.animationDuration = "1s";
        menu.style.animationFillMode = "forwards";

        const buttons = document.getElementsByClassName('menu-button');
        for (let element of buttons) {
            element.style.width = "280px";
        };

        const text = document.getElementsByClassName('button-text');
        for (let element of text) {
            element.style.visibility = "visible";
        };
    };
};

document.getElementById('inf').addEventListener('click', () => {
    home()
})

document.getElementById('home-button').addEventListener('click', () => {
    home()
})

document.getElementById('shorts-button').addEventListener('click', () => {
    shorts()
})

document.getElementById('subs-button').addEventListener('click', () => {
    subs()
})

function home () {
    window.location.replace("/")
}

function shorts () {
    window.location.replace("/shorts")
}

function subs () {
    window.location.replace("/subscriptions")
}