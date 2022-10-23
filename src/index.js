import { todos } from './todo';

function hideAddProjectForm() {
    form.style.display = "none";
}

function showAddProjectForm() {
    form.style.display = "block";
}

const navbarContainer = document.querySelector("#navbar-container");
const navbarButton = document.querySelector("#nav-button-expand");
navbarButton.addEventListener("click", () => navbarContainer.classList.toggle("visible"));

const addProject = document.querySelector("#add-project");
addProject.addEventListener("click", showAddProjectForm);
const form = document.querySelector(".new-project-form")
const cancel_project_btn = document.querySelector("#cancel-project-btn");
cancel_project_btn.addEventListener("click", hideAddProjectForm);
const add_project_btn = document.querySelector("#save-project-btn");
//add_book_btn.addEventListener("click", addNewBook);

hideAddProjectForm();
todos();
