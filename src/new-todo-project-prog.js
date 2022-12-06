let projectArray = [];

//Add initial projects
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
        editBtn.addEventListener("click", (e) => {
            addProjectHeader.innerHTML = "Edit Project";
            newProjectTitle.placeholder = "";
            const currentTitle = projectTitle.innerText;
            newProjectTitle.value = currentTitle;
            projectForm.style.display = "block";
            newProjectTitle.focus();

            // Change Save button functionality to edit
            saveProjectBtn.removeEventListener("click", saveProject);
            saveProjectBtn.addEventListener("click", editProject);
              
            editProject(projectTitle, currentTitle);
            
            // Show Delete button
            projectForm.style.padding = "30px 40px 70px 40px";
            deleteProjectBtnGroup.style.display = "flex";

            // Give functionality to delete project
            document.querySelector("#delete-project-btn").addEventListener("click", () => {
                const index = projectArray.indexOf(currentTitle);
                if (index !== -1) {
                    projectArray.splice(index, 1);
                }
                resetProjectForm();
                saveProjectBtn.removeEventListener("click", editProject);
            });

            // Stop changing to todo list view when hitting edit button
            e.stopPropagation();
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
    resetProjectForm();
    assignProjectTabs();
}

function editProject(projectTitle, currentTitle) {
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
    //console.log(projectTitle.classList)
    resetProjectForm();
    saveProjectBtn.removeEventListener("click", editProject);
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
});







let todoArray = [];
let whichDate = "";
let whichProject = "Inbox";

function addTodoToArray() {
    // Add initial todos
    todoArray.push(
        ["not done", "run", "run description", "11/12/2022", "Low", "Inbox", "2022-11-12"],
        ["not done", "walk", "walk description", "11/14/2022", "Medium", "Inbox", "2022-11-14"],
        ["not done", "hike", "hiking", "11/15/2022", "High", "Inbox", "2022-11-15"],
        ["not done", "play", "playing", "11/16/2022", "Low", "Personal", "2022-11-16"],
        ["not done", "work", "working", "11/23/2022", "High", "Work", "2022-11-23"],
    );
}

function createNewTodo() {
    let status = "not done";
    let title = "";
    let description = "";
    let date = "";
    let priority = "";
    let location = "";
    let whichDate = "";
    let whichProject = "";

    const newTodo = Task(status, title, description, date, priority, location, whichDate, whichProject);
    todoArray.push(newTodo);
}

function showTodos() {
    for (const item in todoArray) { 

        // Figure out which project/date

        if (whichProject == "Inbox") {
            // Only show "not done" and inbox todos
            if (todoArray[item][0] == "not done" && todoArray[item][5] == "Inbox") {
                displayTodos();
            }  
        } else {
            // Only show "not done" and not-inbox todos
            if (todoArray[item][0] == "not done" && todoArray[item][5] == whichProject) {
                displayTodos();
            }  
        }

        const today = getTodayDate();
        if (whichDate == "Today") {
            // Only show "not done" and today todos
            if (todoArray[item][0] == "not done" && todoArray[item][3] == today) {
                displayTodos();
            }  
        } else if (whichDate == "Week") {
            // Figure out date of the week
            let thisweek = [];
            for (let i = 0; i < 7; i++) {
                let weekday = new Date();
                weekday.setDate(weekday.getDate() + i);
                let weekdd = String(weekday.getDate()).padStart(2, '0');
                let weekmm = String(weekday.getMonth() + 1).padStart(2, '0');
                let weekyyyy = weekday.getFullYear();
                weekday = weekmm + '/' + weekdd + '/' + weekyyyy;
                thisweek.push(weekday);
            }

            // Only show "not done" and this week's todos
            if (todoArray[item][0] == "not done" && thisweek.includes(todoArray[item][3])) {
                displayTodo();
            }  
        }
        displayTodo(item.status, item.title, item.description, item.date, item.priority, item.location, item.originalDate, item.whichDate, item.whichProject); 
    }
    //return todoItemContainer;
};

function displayTodo(itemStatus, itemTitle, itemDescription, itemDate, itemPriority, itemLocation, itemOriginalDate, itemWhichDate, itemWhichProject) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("item");

    // Style Done and Title-Description container horizontally
    const todoDoneTitleDescripContainer = document.createElement("div");
    todoDoneTitleDescripContainer.classList.add("todo-done-title-descrip-container");

    // const done = document.createElement("input");
    // done.type = "checkbox";
    const done = document.createElement("button");
    done.type = "button";
    done.classList.add("done");
    done.addEventListener("click", checkDone(e, itemStatus));

    //done.innerHTML = todoArray[item][0];
    todoDoneTitleDescripContainer.appendChild(done);

    // Style Title and Description vertically
    const todoTitleDescriptionContainer = document.createElement("div");
    todoTitleDescriptionContainer.classList.add("todo-title-description-container");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = itemTitle;
    todoTitleDescriptionContainer.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = itemDescription;
    todoTitleDescriptionContainer.appendChild(description);

    todoDoneTitleDescripContainer.appendChild(todoTitleDescriptionContainer);

    // Style Date and Edit vertically
    const todoDateEditContainer = document.createElement("div");
    todoDateEditContainer.classList.add("todo-date-edit-container");

    const date = document.createElement("p");
    date.classList.add("date");
    date.innerHTML = itemDate;
    todoDateEditContainer.appendChild(date);

    // Set done checkbox color according to priority
    setPriorityColor(itemPriority);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        addTodoHeader.innerHTML = "Edit Todo";
        newTodoTitle.placeholder = "";
        newTodoTitle.value = title.innerText;
        newTodoDescription.value = description.innerHTML;
        newTodoDate.value = itemOriginalDate;
        newTodoPriority.value = itemPriority;
        newTodoLocation.value = itemLocation;
        todoForm.style.display = "block";
        newTodoTitle.focus();

        // Change Save button functionality to edit
        saveTodoBtn.removeEventListener("click", saveTodo);
        saveTodoBtn.addEventListener("click", editTodo); 
    
        function editTodo() {
            itemTitle = newTodoTitle.value;
            itemDescription = newTodoDescription.value;
            let newDateFormat = changeDateFormat();
            itemDate = newDateFormat;
            itemPriority = newTodoPriority.value;
            itemLocation = document.getElementById("new-todo-project").value;
            itemOriginalDate = newTodoDate.value;
            resetTodoForm();
            saveTodoBtn.removeEventListener("click", editTodo);
        }

        // Show Delete button
        todoForm.style.padding = "30px 40px 90px 40px";
        deleteTodoBtnGroup.style.display = "flex";

        // Show Project input
        newTodoLocation.style.display = "flex";

        const newOption = document.createElement("option");
        newOption.value = "New Project";
        newOption.innerHTML = "New Project";

        // Create variable so will only delete one item at a time
        let notFound = true;
        // Give functionality to delete todo
        document.querySelector("#delete-todo-btn").addEventListener("click", () => {
            // const index = todoArray.indexOf(item);
            // console.log(index)
            // const index = todoArray.findIndex(e => e.id === item[id]);
            if (item !== -1 && notFound == true) {
                todoArray.splice(item, 1);
                notFound = false;
            }
            resetTodoForm();
            saveTodoBtn.removeEventListener("click", editTodo);
        });
    });

    const editImage = document.createElement("img");
    editImage.src = "./images/pencil-outline.png";

    editBtn.appendChild(editImage);
    todoDateEditContainer.appendChild(editBtn);

    todoItem.append(todoDoneTitleDescripContainer, todoDateEditContainer);
    //todoItemContainer.appendChild(todoItem);
    todoItemsContainer.appendChild(todoItem);
}

function setPriorityColor(itemPriority) {
    const doneBtn = document.querySelector(".done");
    if (itemPriority == "Low") {
        doneBtn.style.border = "solid var(--pewter-blue) 4px";
        doneBtn.style.backgroundColor = "var(--light-pewter-blue)";
    } else if (itemPriority == "Medium") {
        doneBtn.style.border = "solid var(--jasmine) 4px";
        doneBtn.style.backgroundColor = "var(--light-jasmine)";
    } else if (itemPriority == "High") {
        doneBtn.style.border = "solid var(--tomato) 4px";
        doneBtn.style.backgroundColor = "var(--light-tomato)";
    }
}

function checkDone(e, itemStatus) {
    // Add/remove checkmark
    if (itemStatus == "not done") {
        itemStatus = "done"
        e.innerHTML = "✓";
    } else {
        itemStatus = "not done"
        e.innerHTML = "";
    }

    // Remove item
    document.querySelector(".item").classList.toggle("hidden-item");
    setTimeout(() => {
        todoItemsContainer.innerHTML = "";
        showTodos();
    }, "2000");
}

function showAddTodoForm() {
    addTodoHeader.innerHTML = "Add Todo";
    newTodoTitle.placeholder = "Todo Title";
    todoForm.style.padding = "30px 40px 30px 40px";
    todoForm.style.display = "block";
    newTodoTitle.focus();
    saveTodoBtn.addEventListener("click", saveTodo);

    // Don't show Delete button
    deleteTodoBtnGroup.style.display = "none";

    // Don't show Project input
    newTodoLocation.style.display = "none";
}

function hideAddTodoForm() {
    todoForm.style.display = "none";
    newTodoTitle.placeholder = "Todo Title";
    newTodoTitle.value = "";
}

function saveTodo() {
    const newDateFormat = changeDateFormat();
    todoArray.push(["not done", newTodoTitle.value, newTodoDescription.value, newDateFormat, newTodoPriority.value, whichProject, newTodoDate.value]);
    resetTodoForm();
}

// Switch date to MM/DD/YYYY
function changeDateFormat() {
    let newDateFormat = "";
    if (newTodoDate.value != "") {
        const [year, month, day] = newTodoDate.value.split("-");
        newDateFormat = [month, day, year].join("/");
    } else {
        newDateFormat = "";
    }
    return newDateFormat;
}

// Find today's date (from Samuel Meddows on Stackoverflow)
function getTodayDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

function resetTodoForm() {
    // Erase old projects display
    todoItemsContainer.innerHTML = "";
        
    // Show all projects
    showTodos();

    // Reset and close form
    todoForm.reset();
    hideAddTodoForm();
}

const content = document.querySelector("#content");
content.classList.add("todo-content");

const todoHeader = document.createElement("div");
todoHeader.classList.add("todo-header");

const todoTitle = document.createElement("h2");
todoTitle.classList.add("todo-title");
todoTitle.innerHTML = "Inbox";
todoHeader.appendChild(todoTitle);

const addTodoBtn = document.createElement("button");
addTodoBtn.type = "button";
addTodoBtn.classList.add("add-todo-btn");
addTodoBtn.innerHTML = "+";
addTodoBtn.addEventListener("click", showAddTodoForm);
todoHeader.appendChild(addTodoBtn);

content.appendChild(todoHeader);

const todoItemsContainer = document.createElement("div");
todoItemsContainer.classList.add("todo-items-container");
//todoItemsContainer.append(showTodos(todoArray));
content.appendChild(todoItemsContainer);

const todoForm = document.querySelector(".new-todo-form");
const addTodoHeader = document.querySelector("#add-todo-header");
const newTodoTitle = document.querySelector("#new-todo-title");
const newTodoDescription = document.querySelector("#new-todo-description");
const newTodoDate = document.querySelector("#new-todo-date");
const newTodoPriority = document.querySelector("#new-todo-priority");
const newTodoLocation = document.querySelector("#todo-project-field");
const cancelTodoBtn = document.querySelector("#cancel-todo-btn");
cancelTodoBtn.addEventListener("click", hideAddTodoForm);
const saveTodoBtn = document.querySelector("#save-todo-btn");

const deleteTodoBtnGroup = document.querySelector("#delete-todo-btn-group");



// Tabs
const inboxTab = document.querySelector("#inbox-tab");
inboxTab.addEventListener("click", () => {
    whichDate = "";
    whichProject = "Inbox";
    todoTitle.innerHTML = "Inbox";
    reset();
    showTodos();
});

const todayTab = document.querySelector("#today-tab");
todayTab.addEventListener("click", () => {
    whichProject = "";
    whichDate = "Today";
    todoTitle.innerHTML = "Today";
    reset();
    showTodos();
});

const weekTab = document.querySelector("#week-tab");
weekTab.addEventListener("click", () => {
    whichProject = "";
    whichDate = "Week";
    todoTitle.innerHTML = "This Week";
    reset();
    showTodos();
});

function reset() {
    todoItemsContainer.innerHTML = "";
    document.querySelector("#navbar-container").classList.toggle("visible");
};

// Projects
function assignProjectTabs() {
    const projectTitles = document.querySelectorAll(".project-title");
    projectTitles.forEach(item => {
        item.classList.add(item.innerText);
        item.addEventListener("click", () => {
            whichDate = "";
            whichProject = item.innerText;
            todoTitle.innerHTML = item.innerText;
            reset();
            showTodos();
        });
    });
}


export { hideAddProjectForm, addProjectToArray, showProjects, addTodoToArray, hideAddTodoForm, assignProjectTabs, showTodos };

// // Initial set-up
// hideAddProjectForm();
// addProjectToArray();
// showProjects();



// addTodoToArray();
// hideAddTodoForm();
// assignProjectTabs();
// showTodos();