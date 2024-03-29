import { Task } from './task.js';
import { DisplayTodoObject } from './display-todo-object.js';

let todoArray = [];
let currentItem;

function addTodoToArray() {
    // Add initial todos
    // const taskOne = Task("not done", "run", "run description", "11/12/2022", "Low", "Inbox", "2022-11-12");
    // const taskTwo = Task("not done", "walk", "walk description", "11/14/2022", "Medium", "Inbox", "2022-11-14");
    // const taskThree = Task("not done", "hike", "hiking", "11/15/2022", "High", "Inbox", "2022-11-15");
    // const taskFour = Task("not done", "play", "playing", "11/16/2022", "Low", "Personal", "2022-11-16");
    // const taskFive = Task("not done", "work", "working", "11/23/2022", "High", "Work", "2022-11-23");
    // todoArray.push(taskOne, taskTwo, taskThree, taskFour, taskFive);
    // storeArray();
}

function storeArray () {
    if (todoArray.length != 0) {
        localStorage.setItem('storedTodoArray', JSON.stringify(todoArray));
    }
}

function retrieveArray() {
    return JSON.parse(localStorage.getItem('storedTodoArray'));
}

function showTodos() {
    todoArray = retrieveArray();
    //console.log('retrievedArrray: ', todoArray)
    if (todoArray != []) {
        todoArray.forEach((item) => { 
            // Determine which project selected 
            if (currentClick.whichProject == "Inbox") {
                // Only show "not done" and inbox todos
                if (item.status == "not done" && item.location == "Inbox") {
                    displayTodo(item);
                }  
            } else {
                // Only show "not done" and not-inbox todos
                if (item.status == "not done" && item.location == currentClick.whichProject) {
                    displayTodo(item);
                }  
            }

            // Determine which date tab selected
            if (currentClick.whichDate == "Today") {
                // Only show "not done" and today todos
                const today = getTodayDate();
                if (item.status == "not done" && item.date == today) {
                    displayTodo(item);
                }  
            } else if (currentClick.whichDate == "Week") {
                // Only show "not done" and this week's todos
                const thisweek = getWeekDates();
                if (item.status == "not done" && thisweek.includes(item[3])) {
                    displayTodo(item);
                }  
            }
        })
    }
};

function displayTodo(item) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("item");

    // Style Done and Title-Description container horizontally
    const todoDoneTitleDescripContainer = document.createElement("div");
    todoDoneTitleDescripContainer.classList.add("todo-done-title-descrip-container");

    const done = document.createElement("button");
    done.type = "button";
    done.classList.add("done");
    
    todoDoneTitleDescripContainer.appendChild(done);

    // Style Title and Description vertically
    const todoTitleDescriptionContainer = document.createElement("div");
    todoTitleDescriptionContainer.classList.add("todo-title-description-container");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = item.title;
    todoTitleDescriptionContainer.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = item.description;
    todoTitleDescriptionContainer.appendChild(description);

    todoDoneTitleDescripContainer.appendChild(todoTitleDescriptionContainer);

    // Style Date and Edit vertically
    const todoDateEditContainer = document.createElement("div");
    todoDateEditContainer.classList.add("todo-date-edit-container");

    const date = document.createElement("p");
    date.classList.add("date");
    date.innerHTML = item.date;
    todoDateEditContainer.appendChild(date);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");

    const editImage = document.createElement("img");
    editImage.src = "./images/pencil-outline.png";

    editBtn.appendChild(editImage);
    todoDateEditContainer.appendChild(editBtn);

    todoItem.append(todoDoneTitleDescripContainer, todoDateEditContainer);
    todoItemsContainer.appendChild(todoItem); 

    // create display todo object
    const newDisplayTodo = DisplayTodoObject(todoItem, done, title, description, date)
    
    // Add event listeners
    done.addEventListener("click", () => removeTodo(item, newDisplayTodo));
    setDoneColor(item, newDisplayTodo);
    editBtn.addEventListener("click", showEditTodoForm);

    function showEditTodoForm() {
        // const title = document.querySelector(".title");
        // const description = document.querySelector(".description");
        currentItem = item;
        // Fill in edit todo form
        addTodoHeader.innerHTML = "Edit Todo";
        newTodoTitle.placeholder = "";
        newTodoTitle.value = newDisplayTodo.title.innerText;
        newTodoDescription.value = newDisplayTodo.description.innerHTML;
        newTodoDate.value = item.originalDate;
        newTodoPriority.value = item.priority;
        newTodoLocation.value = item.location;
        todoForm.style.display = "block";
        newTodoTitle.focus();
    
        // Change Save button functionality to edit
        saveTodoBtn.removeEventListener("click", saveTodo);
        //saveTodoBtn.addEventListener("click", editTodo);
        saveTodoBtn.addEventListener("click", editTodo); 
        
        // Use new info to save edited todo
        // function editTodo() {
        //     item.title = newTodoTitle.value;
        //     item.description = newTodoDescription.value;
        //     let newDateFormat = changeDateFormat();
        //     item.date = newDateFormat;
        //     item.priority = newTodoPriority.value;
        //     item.location = document.getElementById("new-todo-project").value;
        //     item.originalDate = newTodoDate.value;
        //     resetTodoForm();
        //     //createNewTodo();
        //     saveTodoBtn.removeEventListener("click", editTodo);
        // }
        function editTodo() {
            const index = todoArray.indexOf(item);
            //console.log(index)
            //console.log(currentItem)
            //console.log(newDisplayTodo.title.innerText)
            item.title = newTodoTitle.value;
            item.description = newTodoDescription.value;
            let newDateFormat = changeDateFormat();
            item.date = newDateFormat;
            item.priority = newTodoPriority.value;
            item.location = document.getElementById("new-todo-project").value;
            item.originalDate = newTodoDate.value;

            if (index != -1) {
                todoArray.splice(index, 1, item);
            }
            //console.log(currentItem)
            //editable = false;

            storeArray();

            resetTodoForm();
            //createNewTodo();
            //item = currentItem;
            saveTodoBtn.removeEventListener("click", editTodo);
            //console.log(todoArray)
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
        //const index = todoArray.indexOf(item);
        document.querySelector("#delete-todo-btn").addEventListener("click",deleteTodo);

        function deleteTodo() {
            //const index = todoArray.indexOf(item);
            const index = todoArray.indexOf(currentItem)
            //console.log(index)
            // index = todoArray.indexOf(item);
            //if (index != -1  && notFound == true) {
            if (index != -1) {
                //console.log(item)
                todoArray.splice(index, 1);
                //notFound = false;
            }
            //console.table(todoArray)

            storeArray();

            resetTodoForm();
            //saveTodoBtn.removeEventListener("click", editTodo);
    
            saveTodoBtn.removeEventListener("click", editTodo);
        }
    }
};

function removeTodo(item, newDisplayTodo) {
    // Add/remove checkmark
    if (item.status == "not done") {
        item.status = "done"
        newDisplayTodo.done.innerHTML = "✓";
    } else {
        item.status = "not done"
        newDisplayTodo.done.innerHTML = "";
    }

    // Remove item
    newDisplayTodo.todoItem.classList.toggle("hidden-item");
    setTimeout(() => {
        todoItemsContainer.innerHTML = "";
        showTodos();
    }, "2000");

    storeArray();
}

// Set done checkbox color according to priority
function setDoneColor(item, newDisplayTodo) {
    if (item.priority == "Low") {
        newDisplayTodo.done.style.border = "solid var(--pewter-blue) 4px";
        newDisplayTodo.done.style.backgroundColor = "var(--light-pewter-blue)";
    } else if (item.priority == "Medium") {
        newDisplayTodo.done.style.border = "solid var(--jasmine) 4px";
        newDisplayTodo.done.style.backgroundColor = "var(--light-jasmine)";
    } else if (item.priority == "High") {
        newDisplayTodo.done.style.border = "solid var(--tomato) 4px";
        newDisplayTodo.done.style.backgroundColor = "var(--light-tomato)";
    }
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
    storeArray();

    createNewTodo();
    resetTodoForm();
}

function createNewTodo() {
    let status = "not done";
    let title = newTodoTitle.value;
    let description = newTodoDescription.value;
    let date = changeDateFormat();
    let priority = newTodoPriority.value;
    let location = currentClick.whichProject;
    let originalDate = newTodoDate.value;

    const newTodo = Task(status, title, description, date, priority, location, originalDate);
    todoArray.push(newTodo);
    //localStorage,setItem("todoArray", JSON.stringify(todoArray));
    storeArray();
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

function getWeekDates() {
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
    return thisweek;
}

function resetTodoForm() {
    // Erase old projects display
    todoItemsContainer.innerHTML = "";
    //console.table(todoArray)
    // Show all projects
    showTodos();

    // Reset and close form
    todoForm.reset();
    hideAddTodoForm();
}

// Set up todo content container
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

content.appendChild(todoItemsContainer);

// Todo variables
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
//document.querySelector("#delete-todo-btn").addEventListener("click", deleteTodo);

// Tabs

// Set up tags depending which tab is clicked
const clickedEvent = (whichDate, whichProject) => {
    return {
        whichDate,
        whichProject,
    }
};
// Default is empty date and Inbox project
let currentClick = clickedEvent("", "Inbox");

// Tab view
const inboxTab = document.querySelector("#inbox-tab");
inboxTab.addEventListener("click", () => {
    currentClick.whichDate = "";
    currentClick.whichProject = "Inbox";
    todoTitle.innerHTML = "Inbox";
    reset();
    showTodos();
});

const todayTab = document.querySelector("#today-tab");
todayTab.addEventListener("click", () => {
    currentClick.whichProject = "";
    currentClick.whichDate = "Today";
    todoTitle.innerHTML = "Today";
    reset();
    showTodos();
});

const weekTab = document.querySelector("#week-tab");
weekTab.addEventListener("click", () => {
    currentClick.whichProject = "";
    currentClick.whichDate = "Week";
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
            currentClick.whichDate = "";
            currentClick.whichProject = item.innerText;
            todoTitle.innerHTML = item.innerText;
            reset();
            //todoItemsContainer.innerHTML = "";
                
            showTodos();
        });
    });
    
}


export { addTodoToArray,  hideAddTodoForm, assignProjectTabs, showTodos, todoArray };