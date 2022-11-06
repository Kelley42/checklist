const todos = () => {

    let todoArray = [];

    function addTodoToArray() {
        // Add initial projects
        todoArray.push(
            ["run", "run description", "date", "high", "not done"],
            ["walk", "walk description", "date", "low", "done"]
        );
    }

    function addTodo() {
        console.log("add new todo")
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
    addTodoBtn.addEventListener("click", addTodo);
    todoHeader.appendChild(addTodoBtn);

    content.appendChild(todoHeader);

    const todoItemsContainer = document.createElement("div");
    todoItemsContainer.classList.add("todo-items-container");
    //todoItemsContainer.append(showTodos(todoArray));
    content.appendChild(todoItemsContainer);

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

    addTodoToArray();
    showTodos();
};

export { todos };