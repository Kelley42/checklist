const addProject = () => {
    
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
};

export { addProject };
