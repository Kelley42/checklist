const todos = () => {

    let todoArray = [];

    function addTodoToArray() {
        // Add initial todos
        todoArray.push(
            ["run", "run description", "date", "high", "not done"],
            ["walk", "walk description", "date", "low", "done"]
        );
    }

    function showTodos() {
        // const todoItemContainer = document.createElement("div");
        // todoItemContainer.classList.add("todo-item-container");
    
        for (const item in todoArray) {
            const todoItem = document.createElement("div");
            todoItem.classList.add("item");
    
            const title = document.createElement("h2");
            title.classList.add("title");
            title.innerHTML = todoArray[item][0];
        
            const description = document.createElement("p");
            description.classList.add("description");
            description.innerHTML = todoArray[item][1];
        
            const date = document.createElement("p");
            date.classList.add("date");
            date.innerHTML = todoArray[item][2];
    
            const priority = document.createElement("p");
            priority.classList.add("priority");
            priority.innerHTML = todoArray[item][3];
    
            const done = document.createElement("p");
            done.classList.add("done");
            done.innerHTML = todoArray[item][4];
    
            todoItem.append(title, description, date, priority, done);
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
        todoArray.push([newTodoTitle.value, newTodoDescription.value, newDateFormat, newTodoPriority.value, "not done"]);
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