import { assignProjectTabs, todoArray } from './todo.js';
    
let projectArray = [];

// Add initial projects
function addProjectToArray() {
    projectArray.push("Personal", "Work");
}

function showProjects() {
    projectArray.forEach((i) => {
        const projectTitleContainer = document.createElement("div");
        projectTitleContainer.classList.add("project-title-container");

        const projectTitle = document.createElement("li");
        projectTitle.classList.add("project-title");
        projectTitle.innerHTML = i;

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", (e) => showEditProjectForm(e, i));

        const editImage = document.createElement("img");
        editImage.src = "./images/pencil-outline.png";

        editBtn.appendChild(editImage);
        projectTitle.appendChild(editBtn);
        projectTitleContainer.appendChild(projectTitle);
        projectLinksContainer.appendChild(projectTitleContainer);
    })

    showProjectDropdown();
}

function showEditProjectForm(e, i) {
    addProjectHeader.innerHTML = "Edit Project";
    newProjectTitle.placeholder = "";
    // const currentTitle = projectTitle.innerText;
    // newProjectTitle.value = currentTitle;
    newProjectTitle.value = i;
    projectForm.style.display = "block";
    newProjectTitle.focus();

    // Change Save button functionality to edit
    saveProjectBtn.removeEventListener("click", saveProject);
    saveProjectBtn.addEventListener("click", () => editProject(i));

    // Show Delete button
    projectForm.style.padding = "30px 40px 70px 40px";
    deleteProjectBtnGroup.style.display = "flex";

    // Give functionality to delete project
    document.querySelector("#delete-project-btn").addEventListener("click", () => deleteProject(i));

    // Stop changing to todo list view when hitting edit button
    e.stopPropagation();
}

function deleteProject(i) {
    const index = projectArray.indexOf(i)
    if (index !== -1) {
        projectArray.splice(index, 1);
    }
    resetProjectForm();
    saveProjectBtn.removeEventListener("click", () => editProject(i));
}

// Update location dropdown in edit todo form
function showProjectDropdown() {

    // Make sure dropdown refreshed and empty
    const newTodoProjectDropdown = document.querySelector("#new-todo-project");
    newTodoProjectDropdown.innerHTML = "";

    // Create initial inbox option
    const inboxProject = document.createElement("option");
    inboxProject.value = "Inbox";
    inboxProject.innerHTML = "Inbox";
    newTodoProjectDropdown.appendChild(inboxProject);

    // Add custom projects
    projectArray.forEach((i) => {
        const newProject = document.createElement("option");
        newProject.value = i;
        newProject.innerHTML = i;
        newTodoProjectDropdown.appendChild(newProject);
    })
}

function saveProject() {
    projectArray.push(newProjectTitle.value);
    //localStorage,setItem("projectArray", JSON.stringify(projectArray));
    refreshProjects();
}

function editProject(i) {
    const projectTitle = document.querySelector(".project-title");
    const currentTitle = i;
    projectTitle.innerHTML = newProjectTitle.value;
    const index = projectArray.indexOf(currentTitle);
    if (index !== -1) {
        projectArray[index] = projectTitle.innerHTML;
    }
    
    // Change todo projects to reflect new project title
    editTodoProject();
    function editTodoProject() {
        todoArray.forEach((item) => { 
            if (item.location == currentTitle) {
                item.location = newProjectTitle.value;
            }
        })
    }

    // Change title of todo list if currently showing edited todos
    const todoTitle = document.querySelector(".todo-title");
    if (currentTitle == todoTitle.innerHTML) {
        todoTitle.innerHTML = projectTitle.innerHTML;
    }

    //localStorage,setItem("projectArray", JSON.stringify(projectArray));
    refreshProjects();
    saveProjectBtn.removeEventListener("click", () => editProject(i));
}

// function storeCurrentTitle(currentTitle) {
//     return currentTitle;
// }

function refreshProjects() {
    resetProjectForm();
    assignProjectTabs();
}

function resetProjectForm() {
    // Erase old projects display
    projectLinksContainer.innerHTML = "";
        
    // Show all projects
    showProjects();

    // Reset and close form
    projectForm.reset();
    hideAddProjectForm();
}

function hideAddProjectForm() {
    projectForm.style.display = "none";
    newProjectTitle.placeholder = "Project Title";
    newProjectTitle.value = "";
}

function showAddProjectForm() {
    addProjectHeader.innerHTML = "Add Project";
    newProjectTitle.placeholder = "Project Title";
    projectForm.style.padding = "30px 40px 30px 40px";
    projectForm.style.display = "block";
    newProjectTitle.focus();
    saveProjectBtn.addEventListener("click", saveProject);

    // Don't show Delete button
    deleteProjectBtnGroup.style.display = "none";   
}

// Const declarations and event listeners for projects
document.querySelector("#add-project").addEventListener("click", showAddProjectForm);
const projectForm = document.querySelector(".new-project-form");

const projectLinksContainer = document.querySelector("#project-links");
const addProjectHeader = document.querySelector("#add-project-header");
document.querySelector("#cancel-project-btn").addEventListener("click", hideAddProjectForm);
const saveProjectBtn = document.querySelector("#save-project-btn");

const deleteProjectBtnGroup = document.querySelector("#delete-project-btn-group");

// Can press Enter to add/edit project title
const newProjectTitle = document.querySelector("#new-project-title");
newProjectTitle.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        saveProjectBtn.click();
    }
})

export { hideAddProjectForm, addProjectToArray, showProjects };
