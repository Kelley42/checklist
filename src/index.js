import { hideAddProjectForm, addProjectToArray, showProjects } from './project.js';
import { addTodoToArray, hideAddTodoForm, assignProjectTabs, showTodos } from './todo-new.js';
// import { hideAddProjectForm, addProjectToArray, showProjects, addTodoToArray, hideAddTodoForm, assignProjectTabs, showTodos } from './total-code.js';

// Show/hide navbar
const navbarContainer = document.querySelector("#navbar-container");
const navbarButton = document.querySelector("#nav-button-expand");
navbarButton.addEventListener("click", () => {
    navbarContainer.classList.toggle("visible");
});

// If click outside navbar, closes navbar
window.addEventListener("click", (e) => {
    if (!navbarContainer.contains(e.target) && !navbarButton.contains(e.target) && navbarContainer.classList.value == "visible") {
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
