import { todos } from './todo';

todos();

function toggleNavbar() {
    if ((navbarContainer.style.display == "none") == true) {
        show_navbar();
    } else {
        hide_navbar();
    }
}

function hide_navbar() {
    navbarContainer.style.display = "none";
}

function show_navbar() {
    navbarContainer.style.display = "block";
}

const navbarContainer = document.querySelector("#navbar-container");
const navbarButton = document.querySelector("#nav-button-expand");
navbarButton.addEventListener("click", toggleNavbar);

hide_navbar();