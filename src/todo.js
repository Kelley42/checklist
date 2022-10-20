const todos = () => {
    const content = document.querySelector("#content");
    content.classList.add("todo-content");

    const todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");
    todoHeader.innerHTML = "Inbox";
    content.appendChild(todoHeader);

    let todoList = [
        ["run", "run description", "date", "high", "not done"],
        ["walk", "walk description", "date", "low", "done"]
    ];

    const todoItemsContainer = document.createElement("div");
    todoItemsContainer.classList.add("menu-items-container");
    todoItemsContainer.append(showTodos(todoList));
    content.appendChild(todoItemsContainer);
};

function showTodos(todoList) {
    const todoListContainer = document.createElement("div");
    todoListContainer.classList.add("todo-list-container");

    for (const item in todoList) {
        const todoItem = document.createElement("div");
        todoItem.classList.add("item");

        const title = document.createElement("h2");
        title.classList.add("title");
        title.innerHTML = todoList[item][0];
    
        const description = document.createElement("p");
        description.classList.add("description");
        description.innerHTML = todoList[item][1];
    
        const date = document.createElement("p");
        date.classList.add("date");
        date.innerHTML = todoList[item][2];

        const priority = document.createElement("p");
        priority.classList.add("priority");
        priority.innerHTML = todoList[item][3];

        const done = document.createElement("p");
        done.classList.add("done");
        done.innerHTML = todoList[item][4];

        todoItem.append(title, description, date, priority, done);
        todoListContainer.appendChild(todoItem);
    }
    return todoListContainer;
};

export { todos };