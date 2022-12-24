// function createDisplayTodo() {
//     const todoItem = document.createElement("div");
//     todoItem.classList.add("item");

//     // Style Done and Title-Description container horizontally
//     const todoDoneTitleDescripContainer = document.createElement("div");
//     todoDoneTitleDescripContainer.classList.add("todo-done-title-descrip-container");

//     const done = document.createElement("button");
//     done.type = "button";
//     done.classList.add("done");
    
   
//     todoDoneTitleDescripContainer.appendChild(done);

//     // Style Title and Description vertically
//     const todoTitleDescriptionContainer = document.createElement("div");
//     todoTitleDescriptionContainer.classList.add("todo-title-description-container");

//     const title = document.createElement("h2");
//     title.classList.add("title");
//     title.innerHTML = item.title;
//     todoTitleDescriptionContainer.appendChild(title);

//     const description = document.createElement("p");
//     description.classList.add("description");
//     description.innerHTML = item.description;
//     todoTitleDescriptionContainer.appendChild(description);

//     todoDoneTitleDescripContainer.appendChild(todoTitleDescriptionContainer);

//     // Style Date and Edit vertically
//     const todoDateEditContainer = document.createElement("div");
//     todoDateEditContainer.classList.add("todo-date-edit-container");

//     const date = document.createElement("p");
//     date.classList.add("date");
//     date.innerHTML = item.date;
//     todoDateEditContainer.appendChild(date);


//     const editBtn = document.createElement("button");
//     editBtn.classList.add("edit-btn");


//     const editImage = document.createElement("img");
//     editImage.src = "./images/pencil-outline.png";

//     editBtn.appendChild(editImage);
//     todoDateEditContainer.appendChild(editBtn);

//     todoItem.append(todoDoneTitleDescripContainer, todoDateEditContainer);
//     todoItemsContainer.appendChild(todoItem); 
// }


const DisplayTodoObject = (todoItem, done, title, description, date) => {
    return {
        todoItem,
        done,
        title,
        description,
        date,
    }
}

export { DisplayTodoObject };

