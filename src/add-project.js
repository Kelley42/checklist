const addProject = () => {
    
    let projectArray = [];

    function addProjectToArray() {
        // Add initial projects
        projectArray.push("Personal", "Work");
    }

    function showProjects() {
        projectArray.forEach(function(i) {
            const projectTitle = document.createElement("li");
            projectTitle.classList.add("project-title");
            projectTitle.innerHTML = i;
            console.log(i)

            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");

            const editImage = document.createElement("img");
            editImage.src = "./images/pencil-outline.png";

            editBtn.appendChild(editImage);
            projectTitle.appendChild(editBtn);
            projectLinksContainer.appendChild(projectTitle);
        })
    }

    function saveProject() {
        const newProjectTitle = document.querySelector("#new-project-title");
        projectArray.push(newProjectTitle.value);

        // Erase old library display
        projectLinksContainer.innerHTML = "";

        // Show all projects
        showProjects();

        // Reset and close form
        form.reset();
        hideAddProjectForm();
    }

    const addProject = document.querySelector("#add-project");
    addProject.addEventListener("click", showAddProjectForm);
    const form = document.querySelector(".new-project-form")
    const projectLinksContainer = document.querySelector("#project-links");
    const cancelProjectBtn = document.querySelector("#cancel-project-btn");
    cancelProjectBtn.addEventListener("click", hideAddProjectForm);
    const saveProjectBtn = document.querySelector("#save-project-btn");
    saveProjectBtn.addEventListener("click", saveProject);

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
