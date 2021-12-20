const menuBtn = document.getElementById("menu-div");
const closeBtn = document.getElementById("close-div");
const menu = document.getElementById("menu");
const menuItem = document.getElementsByClassName("menu-item");


function viewMenu() {
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    menu.style.display = "block";
}

function closeMenu() {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    menu.style.display = "none";
}

function activate() {
    for (let i = 0; i >= menuItem.length; i++) {
        menuItem[i].classList.toggle("active");
    };
}

menuBtn.addEventListener('click', viewMenu);
closeBtn.addEventListener('click', closeMenu);