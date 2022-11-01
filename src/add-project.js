const addProject = () => {
    
    let projectArray = [];

    function addProjectToArray() {
        // Add initial projects
        projectArray.push("Personal", "Work");
    }

    function showProjects() {
        projectArray.forEach(function(i) {
            const projectTitleContainer = document.createElement("div");
            projectTitleContainer.classList.add("project-title-container");

            const projectTitle = document.createElement("li");
            projectTitle.classList.add("project-title");
            projectTitle.innerHTML = i;

            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");
            editBtn.addEventListener("click", () => {
                addProjectHeader.innerHTML = "Edit Project";
                newProjectTitle.placeholder = "";
                const currentTitle = projectTitle.innerText;
                newProjectTitle.value = currentTitle;
                form.style.display = "block";
                newProjectTitle.focus();

                // Change Save button functionality to edit
                saveProjectBtn.removeEventListener("click", saveProject);
                saveProjectBtn.addEventListener("click", editProject);
                    
                function editProject() {
                    projectTitle.innerHTML = newProjectTitle.value;
                    const index = projectArray.indexOf(currentTitle);
                    if (index !== -1) {
                        projectArray[index] = projectTitle.innerHTML;
                    }
                    resetForm();
                    saveProjectBtn.removeEventListener("click", editProject);
                }
                
                form.style.padding = "30px 40px 70px 40px";
                deleteProjectBtnGroup.style.display = "flex";
            });

            const editImage = document.createElement("img");
            editImage.src = "./images/pencil-outline.png";

            editBtn.appendChild(editImage);
            projectTitle.appendChild(editBtn);
            projectTitleContainer.appendChild(projectTitle);
            projectLinksContainer.appendChild(projectTitleContainer);
        })
    }

    function saveProject() {
        projectArray.push(newProjectTitle.value);
        resetForm();
    }

    function resetForm() {
        // Erase old projects display
        projectLinksContainer.innerHTML = "";
            
        // Show all projects
        showProjects();

        // Reset and close form
        form.reset();
        hideAddProjectForm();
    }

    function hideAddProjectForm() {
        form.style.display = "none";
        newProjectTitle.placeholder = "Project Title";
        newProjectTitle.value = "";
    }
    
    function showAddProjectForm() {
        addProjectHeader.innerHTML = "Add Project";
        newProjectTitle.placeholder = "Project Title";
        form.style.padding = "30px 40px 30px 40px";
        form.style.display = "block";
        console.log(deleteProjectBtnGroup)
        deleteProjectBtnGroup.style.display = "none";
        newProjectTitle.focus();
    }

    const addProject = document.querySelector("#add-project");
    addProject.addEventListener("click", showAddProjectForm);
    const form = document.querySelector(".new-project-form");

    const projectLinksContainer = document.querySelector("#project-links");
    const addProjectHeader = document.querySelector("#add-project-header");
    const cancelProjectBtn = document.querySelector("#cancel-project-btn");
    cancelProjectBtn.addEventListener("click", hideAddProjectForm);
    const saveProjectBtn = document.querySelector("#save-project-btn");
    saveProjectBtn.addEventListener("click", saveProject);
    const deleteProjectBtnGroup = document.querySelector("#delete-project-btn-group");

    const newProjectTitle = document.querySelector("#new-project-title");
    newProjectTitle.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
            //saveProject();
            saveProjectBtn.click();
        }
    })

    
    
    hideAddProjectForm();
    addProjectToArray();
    showProjects();
};

export { addProject };
