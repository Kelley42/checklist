import { todos } from './todo';

function toggleNavbar() {
    navbarContainer.classList.toggle("visible");
}


const navbarContainer = document.querySelector("#navbar-container");
const navbarButton = document.querySelector("#nav-button-expand");
navbarButton.addEventListener("click", toggleNavbar);

todos();