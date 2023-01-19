import { hideAddProjectForm, addProjectToArray, showProjects } from './project.js';
import { addTodoToArray, hideAddTodoForm, assignProjectTabs, showTodos } from './todo-new.js';

// Show/hide navbar
const navbarContainer = document.querySelector("#navbar-container");
const navbarButton = document.querySelector("#nav-button-expand");
navbarButton.addEventListener("click", () => {
    navbarContainer.classList.toggle("visible");
});

// If click outside navbar, closes navbar
window.addEventListener("click", (e) => {
    // Check for outside click, that navbar is already visible, and that form is not open
    if (!navbarContainer.contains(e.target) && !navbarButton.contains(e.target) && navbarContainer.classList.value == "visible" && document.querySelector(".new-project-form").style.display == "none") {
        navbarContainer.classList.toggle("visible");
    }
})

// Initial set-up
hideAddProjectForm();
addProjectToArray();
showProjects();

addTodoToArray();
hideAddTodoForm();
assignProjectTabs();
showTodos();
