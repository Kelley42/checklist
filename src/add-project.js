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

            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");
            editBtn.addEventListener("click", () => {
                addProjectHeader.innerHTML = "Edit Project";
                newProjectTitle.placeholder = ""
                const currentTitle = projectTitle.innerText;
                newProjectTitle.value = currentTitle;
                form.style.display = "block";
                newProjectTitle.focus();
            });

            const editImage = document.createElement("img");
            editImage.src = "./images/pencil-outline.png";

            editBtn.appendChild(editImage);
            projectTitle.appendChild(editBtn);
            projectLinksContainer.appendChild(projectTitle);
        })
    }

    function saveProject() {
        projectArray.push(newProjectTitle.value);

        // Erase old projects display
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
    const addProjectHeader = document.querySelector("#add-project-header");
    const cancelProjectBtn = document.querySelector("#cancel-project-btn");
    cancelProjectBtn.addEventListener("click", hideAddProjectForm);
    const saveProjectBtn = document.querySelector("#save-project-btn");
    saveProjectBtn.addEventListener("click", saveProject);

    const newProjectTitle = document.querySelector("#new-project-title");
    newProjectTitle.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
            //saveProject();
            saveProjectBtn.click();
        }
    })

    function hideAddProjectForm() {
        form.style.display = "none";
    }
    
    function showAddProjectForm() {
        addProjectHeader.innerHTML = "Add Project";
        newProjectTitle.placeholder = "Project Title";
        form.style.display = "block";
        newProjectTitle.focus();
    }
    
    hideAddProjectForm();
    addProjectToArray();
    showProjects();
};

export { addProject };
