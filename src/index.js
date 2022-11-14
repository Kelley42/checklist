import { todos } from './todo';
import { addProject } from './add-project';

const navbarContainer = document.querySelector("#navbar-container");
const navbarButton = document.querySelector("#nav-button-expand");
navbarButton.addEventListener("click", () => {
    navbarContainer.classList.toggle("visible");
});

addProject();
todos();


