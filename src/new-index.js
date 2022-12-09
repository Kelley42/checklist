import { hideAddProjectForm, addProjectToArray, showProjects, addTodoToArray, hideAddTodoForm, assignProjectTabs, showTodos } from './new-todo-proj-prog2.js';


// Show/hide navbar
const navbarContainer = document.querySelector("#navbar-container");
const navbarButton = document.querySelector("#nav-button-expand");
navbarButton.addEventListener("click", () => {
    navbarContainer.classList.toggle("visible");
});

// Initial set-up
hideAddProjectForm();
addProjectToArray();
showProjects();


addTodoToArray();
hideAddTodoForm();
assignProjectTabs();
showTodos();