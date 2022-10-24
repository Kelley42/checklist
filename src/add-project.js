const addProject = () => {
    
    let projectArray = [];

    function addProjectToArray() {
        // Add initial projects
        projectArray.push("Personal", "Work");
    }

    function showProjects() {
        const projectLinksContainer = document.querySelector("#project-links");

        projectArray.forEach(function(i) {
            const projectTitle = document.createElement("li");
            projectTitle.classList.add("project-title");
            projectTitle.innerHTML = i;

            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");

            const editImage = document.createElement("img");
            editImage.src = "./images/pencil-outline.png";

            editBtn.appendChild(editImage);
            projectTitle.appendChild(editBtn);
            projectLinksContainer.appendChild(projectTitle);
        })
    }

    const addProject = document.querySelector("#add-project");
    addProject.addEventListener("click", showAddProjectForm);
    const form = document.querySelector(".new-project-form")
    const cancel_project_btn = document.querySelector("#cancel-project-btn");
    cancel_project_btn.addEventListener("click", hideAddProjectForm);
    const add_project_btn = document.querySelector("#save-project-btn");

    function hideAddProjectForm() {
        form.style.display = "none";
    }
    
    function showAddProjectForm() {
        form.style.display = "block";
    }
    
    hideAddProjectForm();
    addProjectToArray();
    showProjects();
};

export { addProject };
