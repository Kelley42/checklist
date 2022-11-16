const todos = () => {

    let todoArray = [];
    let whichDate = "";
    let whichProject = "Inbox";

    function addTodoToArray() {
        // Add initial todos
        todoArray.push(
            ["not done", "run", "run description", "11-12-2022", "Low", "Inbox"],
            ["not done", "walk", "walk description", "11-14-2022", "Medium", "Inbox"],
            ["not done", "hike", "hiking", "11-15-2022", "High", "Inbox"],
            ["not done", "play", "playing", "11-16-2022", "Low", "Personal"],
            ["not done", "work", "working", "11-23-2022", "High", "Work"],
        );
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

            // Find today's date (from Samuel Meddows on Stackoverflow)
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = mm + '-' + dd + '-' + yyyy;
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
                    weekday = weekmm + '-' + weekdd + '-' + weekyyyy;
                    thisweek.push(weekday);
                }

                // Only show "not done" and this week's todos
                if (todoArray[item][0] == "not done" && thisweek.includes(todoArray[item][3])) {
                    displayTodos();
                }  
            }

              
            function displayTodos() {
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
                done.addEventListener("click", checkDone);

                function checkDone() {
                    // Add/remove checkmark
                    if (todoArray[item][0] == "not done") {
                        todoArray[item][0] = "done"
                        done.innerHTML = "✓";
                    } else {
                        todoArray[item][0] = "not done"
                        done.innerHTML = "";
                    }

                    // Remove item
                    todoItem.classList.toggle("hidden-item");
                    setTimeout(() => {
                        todoItemsContainer.innerHTML = "";
                        showTodos();
                    }, "2000");
                }
                //done.innerHTML = todoArray[item][0];
                todoDoneTitleDescripContainer.appendChild(done);

                // Style Title and Description vertically
                const todoTitleDescriptionContainer = document.createElement("div");
                todoTitleDescriptionContainer.classList.add("todo-title-description-container");
    
                const title = document.createElement("h2");
                title.classList.add("title");
                title.innerHTML = todoArray[item][1];
                todoTitleDescriptionContainer.appendChild(title);
            
                const description = document.createElement("p");
                description.classList.add("description");
                description.innerHTML = todoArray[item][2];
                todoTitleDescriptionContainer.appendChild(description);

                todoDoneTitleDescripContainer.appendChild(todoTitleDescriptionContainer);
        
                // Style Date and Edit vertically
                const todoDateEditContainer = document.createElement("div");
                todoDateEditContainer.classList.add("todo-date-edit-container");

                const date = document.createElement("p");
                date.classList.add("date");
                date.innerHTML = todoArray[item][3];
                todoDateEditContainer.appendChild(date);

                // Set done checkbox color according to priority
                if (todoArray[item][4] == "Low") {
                    done.style.border = "solid var(--pewter-blue) 4px";
                    done.style.backgroundColor = "var(--light-pewter-blue)";
                } else if (todoArray[item][4] == "Medium") {
                    done.style.border = "solid var(--jasmine) 4px";
                    done.style.backgroundColor = "var(--light-jasmine)";
                } else if (todoArray[item][4] == "High") {
                    done.style.border = "solid var(--tomato) 4px";
                    done.style.backgroundColor = "var(--light-tomato)";
                }

                const editBtn = document.createElement("button");
                editBtn.classList.add("edit-btn");
                editBtn.addEventListener("click", () => {
                    addTodoHeader.innerHTML = "Edit Todo";
                    newTodoTitle.placeholder = "";
                    const currentTitle = title.innerText;
                    const currentDescription = description.innerHTML;
                    
                    const currentPriority = todoArray[item][4];
                    const currentLocation = todoArray[item][5];
                    newTodoTitle.value = currentTitle;
                    newTodoDescription.value = currentDescription;
                    newTodoPriority.value = currentPriority;
                    newTodoLocation.value = currentLocation;
                    form.style.display = "block";
                    newTodoTitle.focus();

                    // Change Save button functionality to edit
                    saveTodoBtn.removeEventListener("click", saveTodo);
                    saveTodoBtn.addEventListener("click", editTodo); 
                
                    function editTodo() {
                        todoArray[item][1] = newTodoTitle.value;
                        todoArray[item][2] = newTodoDescription.value;
                        todoArray[item][3] = newTodoDate.value;
                        todoArray[item][4] = newTodoPriority.value;
                        todoArray[item][5] = document.getElementById("new-todo-project").value;
                        //const value = e.options[e.selectedIndex].value;
                        //const text = e.options[e.selectedIndex].text;
                        //console.log(value)
                        
                        //console.log(todoArray[item][5])
                        //console.log(newTodoLocation[selectedIndex].value)
                        //console.log(newTodoLocation.target.options[newTodoLocation.target.selectedIndex].text)
                        resetForm();
                        saveTodoBtn.removeEventListener("click", editTodo);
                    }

                    // Show Delete button
                    form.style.padding = "30px 40px 90px 40px";
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
                        resetForm();
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
            
        }
        //return todoItemContainer;
    };

    function showAddTodoForm() {
        addTodoHeader.innerHTML = "Add Todo";
        newTodoTitle.placeholder = "Todo Title";
        form.style.padding = "30px 40px 30px 40px";
        form.style.display = "block";
        newTodoTitle.focus();
        saveTodoBtn.addEventListener("click", saveTodo);

        // Don't show Delete button
        deleteTodoBtnGroup.style.display = "none";

        // Don't show Project input
        newTodoLocation.style.display = "none";
    }

    function hideAddTodoForm() {
        form.style.display = "none";
        newTodoTitle.placeholder = "Todo Title";
        newTodoTitle.value = "";
    }

    function saveTodo() {
        // Switch date to MM/DD/YYYY
        const [year, month, day] = newTodoDate.value.split("-");
        const newDateFormat = [month, day, year].join("-");

        todoArray.push(["not done", newTodoTitle.value, newTodoDescription.value, newDateFormat, newTodoPriority.value, newTodoLocation.value]);
        resetForm();
    }

    function resetForm() {
        // Erase old projects display
        todoItemsContainer.innerHTML = "";
            
        // Show all projects
        showTodos();

        // Reset and close form
        form.reset();
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

    const form = document.querySelector(".new-todo-form");
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
    

    addTodoToArray();
    hideAddTodoForm();
    assignProjectTabs();
    showTodos();
};

export { todos };