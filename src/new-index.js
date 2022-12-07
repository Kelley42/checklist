import { hideAddProjectForm, addProjectToArray, showProjects, addTodoToArray, hideAddTodoForm, assignProjectTabs, showTodos, initiateWhichTab } from './new-todo-project-prog.js';


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