const addProject = () => {
    
    let projectArray = [];

    function addProjectToArray() {
        // Add initial projects
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
                    
                    // Change title of todo list if currently showing edited todos
                    const todoTitle = document.querySelector(".todo-title");
                    if (currentTitle == todoTitle.innerHTML) {
                        todoTitle.innerHTML = projectTitle.innerHTML;
                    }
                    resetForm();
                    saveProjectBtn.removeEventListener("click", editProject);
                }

                // Show Delete button
                form.style.padding = "30px 40px 70px 40px";
                deleteProjectBtnGroup.style.display = "flex";

                // Give functionality to delete project
                document.querySelector("#delete-project-btn").addEventListener("click", () => {
                    const index = projectArray.indexOf(currentTitle);
                    if (index !== -1) {
                        projectArray.splice(index, 1);
                    }
                    resetForm();
                    saveProjectBtn.removeEventListener("click", editProject);
                });
            });

            const editImage = document.createElement("img");
            editImage.src = "./images/pencil-outline.png";

            editBtn.appendChild(editImage);
            projectTitle.appendChild(editBtn);
            projectTitleContainer.appendChild(projectTitle);
            projectLinksContainer.appendChild(projectTitleContainer);
        })

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
        showProjectDropdown();
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
        newProjectTitle.focus();
        saveProjectBtn.addEventListener("click", saveProject);

        // Don't show Delete button
        deleteProjectBtnGroup.style.display = "none";   
    }

    const addProject = document.querySelector("#add-project");
    addProject.addEventListener("click", showAddProjectForm);
    const form = document.querySelector(".new-project-form");

    const projectLinksContainer = document.querySelector("#project-links");
    const addProjectHeader = document.querySelector("#add-project-header");
    const cancelProjectBtn = document.querySelector("#cancel-project-btn");
    cancelProjectBtn.addEventListener("click", hideAddProjectForm);
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

    // Initial set-up
    hideAddProjectForm();
    addProjectToArray();
    showProjects();

};

export { addProject };
