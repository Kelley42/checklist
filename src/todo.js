const todos = () => {

    let todoArray = [];

    function addTodoToArray() {
        // Add initial todos
        todoArray.push(
            ["not done", "run", "run description", "date", "Low"],
            ["not done", "walk", "walk description", "date", "Medium"],
            ["not done", "hike", "hiking", "date", "High"]
        );
    }

    function showTodos() {
        // const todoItemContainer = document.createElement("div");
        // todoItemContainer.classList.add("todo-item-container");
    
        for (const item in todoArray) {
            const todoItem = document.createElement("div");
            todoItem.classList.add("item");
            // Odd-numbered item has white background
            // if (item % 2 == 0) {
            //     todoItem.style.backgroundColor = "var(--light-white-chocolate)";
            // } else {
            //     todoItem.style.backgroundColor = "var(--white-chocolate)";
            //     todoItem.style.padding = "20px;"
            // }

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
                if (todoArray[item][0] == "not done") {
                    todoArray[item][0] = "done"
                    done.innerHTML = "✓";
                } else {
                    todoArray[item][0] = "not done"
                    done.innerHTML = "";
                }
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
        
            // Style Date and Priority vertically
            const todoDatePriorityContainer = document.createElement("div");
            todoDatePriorityContainer.classList.add("todo-date-priority-container");

            const date = document.createElement("p");
            date.classList.add("date");
            date.innerHTML = todoArray[item][3];
            todoDatePriorityContainer.appendChild(date);

            // Set done checkbox color according to priority
            if (todoArray[item][4] == "Low") {
                done.style.border = "solid var(--pewter-blue) 4px";
                // done.style.accentColor = "var(--light-pewter-blue)";
                done.style.backgroundColor = "var(--light-pewter-blue)";
            } else if (todoArray[item][4] == "Medium") {
                done.style.border = "solid var(--jasmine) 4px";
                // done.style.accentColor = "var(--light-jasmine)";
                done.style.backgroundColor = "var(--light-jasmine)";
            } else if (todoArray[item][4] == "High") {
                done.style.border = "solid var(--tomato) 4px";
                // done.style.accentColor = "var(--light-tomato)";
                done.style.backgroundColor = "var(--light-tomato)";
            }
    
            todoItem.append(todoDoneTitleDescripContainer, todoDatePriorityContainer);
            //todoItemContainer.appendChild(todoItem);
            todoItemsContainer.appendChild(todoItem);
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
    }

    function hideAddTodoForm() {
        form.style.display = "none";
        newTodoTitle.placeholder = "Todo Title";
        newTodoTitle.value = "";
    }

    function saveTodo() {
        // Switch date to MM/DD/YYYY
        const yearFirstDate = newTodoDate.value;
        const [year, month, day] = yearFirstDate.split("-");
        const newDateFormat = [month, day, year].join("-");

        todoArray.push(["not done", newTodoTitle.value, newTodoDescription.value, newDateFormat, newTodoPriority.value]);
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
    const cancelTodoBtn = document.querySelector("#cancel-todo-btn");
    cancelTodoBtn.addEventListener("click", hideAddTodoForm);
    const saveTodoBtn = document.querySelector("#save-todo-btn");
    
    const deleteTodoBtnGroup = document.querySelector("#delete-todo-btn-group");

    addTodoToArray();
    hideAddTodoForm();
    showTodos();
};

export { todos };