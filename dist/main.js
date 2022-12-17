/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n\n// Show/hide navbar\nconst navbarContainer = document.querySelector(\"#navbar-container\");\nconst navbarButton = document.querySelector(\"#nav-button-expand\");\nnavbarButton.addEventListener(\"click\", () => {\n    navbarContainer.classList.toggle(\"visible\");\n});\n\n// If click outside navbar, closes navbar\nwindow.addEventListener(\"click\", (e) => {\n    if (!navbarContainer.contains(e.target) && !navbarButton.contains(e.target) && navbarContainer.classList.value == \"visible\") {\n        console.log(\"boo\")\n        navbarContainer.classList.toggle(\"visible\");\n    }\n})\n\n// Initial set-up\n;(0,_project_js__WEBPACK_IMPORTED_MODULE_0__.hideAddProjectForm)();\n(0,_project_js__WEBPACK_IMPORTED_MODULE_0__.addProjectToArray)();\n(0,_project_js__WEBPACK_IMPORTED_MODULE_0__.showProjects)();\n\n(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.addTodoToArray)();\n(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.hideAddTodoForm)();\n(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.assignProjectTabs)();\n(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.showTodos)();\n\n\n//# sourceURL=webpack://checklist/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToArray\": () => (/* binding */ addProjectToArray),\n/* harmony export */   \"hideAddProjectForm\": () => (/* binding */ hideAddProjectForm),\n/* harmony export */   \"showProjects\": () => (/* binding */ showProjects)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n    \nlet projectArray = [];\n\n// Add initial projects\nfunction addProjectToArray() {\n    projectArray.push(\"Personal\", \"Work\");\n}\n\nfunction showProjects() {\n    projectArray.forEach((i) => {\n        const projectTitleContainer = document.createElement(\"div\");\n        projectTitleContainer.classList.add(\"project-title-container\");\n\n        const projectTitle = document.createElement(\"li\");\n        projectTitle.classList.add(\"project-title\");\n        projectTitle.innerHTML = i;\n\n        const editBtn = document.createElement(\"button\");\n        editBtn.classList.add(\"edit-btn\");\n        editBtn.addEventListener(\"click\", (e) => {\n            addProjectHeader.innerHTML = \"Edit Project\";\n            newProjectTitle.placeholder = \"\";\n            const currentTitle = projectTitle.innerText;\n            newProjectTitle.value = currentTitle;\n            projectForm.style.display = \"block\";\n            newProjectTitle.focus();\n\n            // Change Save button functionality to edit\n            saveProjectBtn.removeEventListener(\"click\", saveProject);\n            saveProjectBtn.addEventListener(\"click\", editProject);\n                    \n            editProject(projectTitle, currentTitle);\n\n            // Show Delete button\n            projectForm.style.padding = \"30px 40px 70px 40px\";\n            deleteProjectBtnGroup.style.display = \"flex\";\n\n            // Give functionality to delete project\n            document.querySelector(\"#delete-project-btn\").addEventListener(\"click\", () => {\n                const index = projectArray.indexOf(currentTitle);\n                if (index !== -1) {\n                    projectArray.splice(index, 1);\n                }\n                resetProjectForm();\n                saveProjectBtn.removeEventListener(\"click\", editProject);\n            });\n\n            // Stop changing to todo list view when hitting edit button\n            e.stopPropagation();\n        });\n\n        const editImage = document.createElement(\"img\");\n        editImage.src = \"./images/pencil-outline.png\";\n\n        editBtn.appendChild(editImage);\n        projectTitle.appendChild(editBtn);\n        projectTitleContainer.appendChild(projectTitle);\n        projectLinksContainer.appendChild(projectTitleContainer);\n    })\n\n    // Update location dropdown in edit todo form\n    function showProjectDropdown() {\n\n        // Make sure dropdown refreshed and empty\n        const newTodoProjectDropdown = document.querySelector(\"#new-todo-project\");\n        newTodoProjectDropdown.innerHTML = \"\";\n\n        // Create initial inbox option\n        const inboxProject = document.createElement(\"option\");\n        inboxProject.value = \"Inbox\";\n        inboxProject.innerHTML = \"Inbox\";\n        newTodoProjectDropdown.appendChild(inboxProject);\n\n        // Add custom projects\n        projectArray.forEach((i) => {\n            const newProject = document.createElement(\"option\");\n            newProject.value = i;\n            newProject.innerHTML = i;\n            newTodoProjectDropdown.appendChild(newProject);\n        })\n    }\n    showProjectDropdown();\n}\n\nfunction saveProject() {\n    projectArray.push(newProjectTitle.value);\n    resetProjectForm();\n    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.assignProjectTabs)();\n}\n\nfunction editProject(projectTitle, currentTitle) {\n    projectTitle.innerHTML = newProjectTitle.value;\n    const index = projectArray.indexOf(currentTitle);\n    if (index !== -1) {\n        projectArray[index] = projectTitle.innerHTML;\n    }\n    \n    // Change title of todo list if currently showing edited todos\n    const todoTitle = document.querySelector(\".todo-title\");\n    if (currentTitle == todoTitle.innerHTML) {\n        todoTitle.innerHTML = projectTitle.innerHTML;\n    }\n    //console.log(projectTitle.classList)\n    resetProjectForm();\n    saveProjectBtn.removeEventListener(\"click\", editProject);\n}\n\nfunction resetProjectForm() {\n    // Erase old projects display\n    projectLinksContainer.innerHTML = \"\";\n        \n    // Show all projects\n    showProjects();\n\n    // Reset and close form\n    projectForm.reset();\n    hideAddProjectForm();\n}\n\nfunction hideAddProjectForm() {\n    projectForm.style.display = \"none\";\n    newProjectTitle.placeholder = \"Project Title\";\n    newProjectTitle.value = \"\";\n}\n\nfunction showAddProjectForm() {\n    addProjectHeader.innerHTML = \"Add Project\";\n    newProjectTitle.placeholder = \"Project Title\";\n    projectForm.style.padding = \"30px 40px 30px 40px\";\n    projectForm.style.display = \"block\";\n    newProjectTitle.focus();\n    saveProjectBtn.addEventListener(\"click\", saveProject);\n\n    // Don't show Delete button\n    deleteProjectBtnGroup.style.display = \"none\";   \n}\n\n// Const declarations and event listeners for projects\ndocument.querySelector(\"#add-project\").addEventListener(\"click\", showAddProjectForm);\nconst projectForm = document.querySelector(\".new-project-form\");\n\nconst projectLinksContainer = document.querySelector(\"#project-links\");\nconst addProjectHeader = document.querySelector(\"#add-project-header\");\ndocument.querySelector(\"#cancel-project-btn\").addEventListener(\"click\", hideAddProjectForm);\nconst saveProjectBtn = document.querySelector(\"#save-project-btn\");\n\nconst deleteProjectBtnGroup = document.querySelector(\"#delete-project-btn-group\");\n\n// Can press Enter to add/edit project title\nconst newProjectTitle = document.querySelector(\"#new-project-title\");\nnewProjectTitle.addEventListener(\"keydown\", (e) => {\n    if (e.key == \"Enter\") {\n        e.preventDefault();\n        saveProjectBtn.click();\n    }\n})\n\n\n\n\n//# sourceURL=webpack://checklist/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nconst Task = (status, title, description, date, priority, location, originalDate) => {\n    return {\n        status, \n        title,\n        description,\n        date, \n        priority,\n        location,\n        originalDate,\n    }\n}\n\n\n\n//# sourceURL=webpack://checklist/./src/task.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoToArray\": () => (/* binding */ addTodoToArray),\n/* harmony export */   \"assignProjectTabs\": () => (/* binding */ assignProjectTabs),\n/* harmony export */   \"hideAddTodoForm\": () => (/* binding */ hideAddTodoForm),\n/* harmony export */   \"showTodos\": () => (/* binding */ showTodos)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\nlet todoArray = [];\n\nfunction addTodoToArray() {\n    // Add initial todos\n    const taskOne = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(\"not done\", \"run\", \"run description\", \"11/12/2022\", \"Low\", \"Inbox\", \"2022-11-12\");\n    const taskTwo = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(\"not done\", \"walk\", \"walk description\", \"11/14/2022\", \"Medium\", \"Inbox\", \"2022-11-14\");\n    const taskThree = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(\"not done\", \"hike\", \"hiking\", \"11/15/2022\", \"High\", \"Inbox\", \"2022-11-15\");\n    const taskFour = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(\"not done\", \"play\", \"playing\", \"11/16/2022\", \"Low\", \"Personal\", \"2022-11-16\");\n    const taskFive = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(\"not done\", \"work\", \"working\", \"11/23/2022\", \"High\", \"Work\", \"2022-11-23\");\n    todoArray.push(taskOne, taskTwo, taskThree, taskFour, taskFive);\n}\n\nfunction showTodos() {\n    todoArray.forEach((item) => { \n        // Determine which project selected \n        if (currentClick.whichProject == \"Inbox\") {\n            // Only show \"not done\" and inbox todos\n            if (item.status == \"not done\" && item.location == \"Inbox\") {\n                displayTodo(item);\n            }  \n        } else {\n            // Only show \"not done\" and not-inbox todos\n            if (item.status == \"not done\" && item.location == currentClick.whichProject) {\n                displayTodo(item);\n            }  \n        }\n\n        // Determine which date tab selected\n        if (currentClick.whichDate == \"Today\") {\n            // Only show \"not done\" and today todos\n            const today = getTodayDate();\n            if (item.status == \"not done\" && item.date == today) {\n                displayTodo(item);\n            }  \n        } else if (currentClick.whichDate == \"Week\") {\n            // Only show \"not done\" and this week's todos\n            const thisweek = getWeekDates();\n            if (item.status == \"not done\" && thisweek.includes(item[3])) {\n                displayTodo(item);\n            }  \n        }\n    })\n};\n   \nfunction displayTodo(item) {\n    const todoItem = document.createElement(\"div\");\n    todoItem.classList.add(\"item\");\n\n    // Style Done and Title-Description container horizontally\n    const todoDoneTitleDescripContainer = document.createElement(\"div\");\n    todoDoneTitleDescripContainer.classList.add(\"todo-done-title-descrip-container\");\n\n    const done = document.createElement(\"button\");\n    done.type = \"button\";\n    done.classList.add(\"done\");\n    done.addEventListener(\"click\", () => {\n        // Add/remove checkmark\n        if (item.status == \"not done\") {\n            item.status = \"done\"\n            done.innerHTML = \"✓\";\n        } else {\n            item.status = \"not done\"\n            done.innerHTML = \"\";\n        }\n\n        // Remove item\n        todoItem.classList.toggle(\"hidden-item\");\n        setTimeout(() => {\n            todoItemsContainer.innerHTML = \"\";\n            showTodos();\n        }, \"2000\");\n    });\n   \n    todoDoneTitleDescripContainer.appendChild(done);\n\n    // Style Title and Description vertically\n    const todoTitleDescriptionContainer = document.createElement(\"div\");\n    todoTitleDescriptionContainer.classList.add(\"todo-title-description-container\");\n\n    const title = document.createElement(\"h2\");\n    title.classList.add(\"title\");\n    title.innerHTML = item.title;\n    todoTitleDescriptionContainer.appendChild(title);\n\n    const description = document.createElement(\"p\");\n    description.classList.add(\"description\");\n    description.innerHTML = item.description;\n    todoTitleDescriptionContainer.appendChild(description);\n\n    todoDoneTitleDescripContainer.appendChild(todoTitleDescriptionContainer);\n\n    // Style Date and Edit vertically\n    const todoDateEditContainer = document.createElement(\"div\");\n    todoDateEditContainer.classList.add(\"todo-date-edit-container\");\n\n    const date = document.createElement(\"p\");\n    date.classList.add(\"date\");\n    date.innerHTML = item.date;\n    todoDateEditContainer.appendChild(date);\n\n    // Set done checkbox color according to priority\n    if (item.priority == \"Low\") {\n        done.style.border = \"solid var(--pewter-blue) 4px\";\n        done.style.backgroundColor = \"var(--light-pewter-blue)\";\n    } else if (item.priority == \"Medium\") {\n        done.style.border = \"solid var(--jasmine) 4px\";\n        done.style.backgroundColor = \"var(--light-jasmine)\";\n    } else if (item.priority == \"High\") {\n        done.style.border = \"solid var(--tomato) 4px\";\n        done.style.backgroundColor = \"var(--light-tomato)\";\n    }\n\n    const editBtn = document.createElement(\"button\");\n    editBtn.classList.add(\"edit-btn\");\n    editBtn.addEventListener(\"click\", () => {\n        // Fill in edit todo form\n        addTodoHeader.innerHTML = \"Edit Todo\";\n        newTodoTitle.placeholder = \"\";\n        newTodoTitle.value = title.innerText;\n        newTodoDescription.value = description.innerHTML;\n        newTodoDate.value = item.originalDate;\n        newTodoPriority.value = item.priority;\n        newTodoLocation.value = item.location;\n        todoForm.style.display = \"block\";\n        newTodoTitle.focus();\n\n        // Change Save button functionality to edit\n        saveTodoBtn.removeEventListener(\"click\", saveTodo);\n        saveTodoBtn.addEventListener(\"click\", editTodo); \n        \n        function editTodo() {\n            item.title = newTodoTitle.value;\n            item.description = newTodoDescription.value;\n            let newDateFormat = changeDateFormat();\n            item.date = newDateFormat;\n            item.priority = newTodoPriority.value;\n            item.location = document.getElementById(\"new-todo-project\").value;\n            item.originalDate = newTodoDate.value;\n            resetTodoForm();\n            createNewTodo();\n            saveTodoBtn.removeEventListener(\"click\", editTodo);\n        }\n\n        // Show Delete button\n        todoForm.style.padding = \"30px 40px 90px 40px\";\n        deleteTodoBtnGroup.style.display = \"flex\";\n\n        // Show Project input\n        newTodoLocation.style.display = \"flex\";\n\n        const newOption = document.createElement(\"option\");\n        newOption.value = \"New Project\";\n        newOption.innerHTML = \"New Project\";\n\n        // Create variable so will only delete one item at a time\n        let notFound = true;\n        // Give functionality to delete todo\n        document.querySelector(\"#delete-todo-btn\").addEventListener(\"click\", () => {\n            if (item !== -1 && notFound == true) {\n                todoArray.splice(item, 1);\n                notFound = false;\n            }\n            resetTodoForm();\n            saveTodoBtn.removeEventListener(\"click\", editTodo);\n        });\n    });\n\n    const editImage = document.createElement(\"img\");\n    editImage.src = \"./images/pencil-outline.png\";\n\n    editBtn.appendChild(editImage);\n    todoDateEditContainer.appendChild(editBtn);\n\n    todoItem.append(todoDoneTitleDescripContainer, todoDateEditContainer);\n    todoItemsContainer.appendChild(todoItem);  \n};\n   \nfunction showAddTodoForm() {\n    addTodoHeader.innerHTML = \"Add Todo\";\n    newTodoTitle.placeholder = \"Todo Title\";\n    todoForm.style.padding = \"30px 40px 30px 40px\";\n    todoForm.style.display = \"block\";\n    newTodoTitle.focus();\n    saveTodoBtn.addEventListener(\"click\", saveTodo);\n\n    // Don't show Delete button\n    deleteTodoBtnGroup.style.display = \"none\";\n\n    // Don't show Project input\n    newTodoLocation.style.display = \"none\";\n}\n\nfunction hideAddTodoForm() {\n    todoForm.style.display = \"none\";\n    newTodoTitle.placeholder = \"Todo Title\";\n    newTodoTitle.value = \"\";\n}\n\nfunction saveTodo() {\n    createNewTodo();\n    resetTodoForm();\n}\n\nfunction createNewTodo() {\n    let status = \"not done\";\n    let title = newTodoTitle.value;\n    let description = newTodoDescription.value;\n    let date = changeDateFormat();\n    let priority = newTodoPriority.value;\n    let location = currentClick.whichProject;\n    let originalDate = newTodoDate.value;\n\n    const newTodo = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(status, title, description, date, priority, location, originalDate);\n    todoArray.push(newTodo);\n}\n\n// Switch date to MM/DD/YYYY\nfunction changeDateFormat() {\n    let newDateFormat = \"\";\n    if (newTodoDate.value != \"\") {\n        const [year, month, day] = newTodoDate.value.split(\"-\");\n        newDateFormat = [month, day, year].join(\"/\");\n    } else {\n        newDateFormat = \"\";\n    }\n    return newDateFormat;\n}\n\n// Find today's date (from Samuel Meddows on Stackoverflow)\nfunction getTodayDate() {\n    let today = new Date();\n    let dd = String(today.getDate()).padStart(2, '0');\n    let mm = String(today.getMonth() + 1).padStart(2, '0');\n    let yyyy = today.getFullYear();\n    today = mm + '/' + dd + '/' + yyyy;\n    return today;\n}\n\nfunction getWeekDates() {\n    // Figure out date of the week\n    let thisweek = [];\n    for (let i = 0; i < 7; i++) {\n        let weekday = new Date();\n        weekday.setDate(weekday.getDate() + i);\n        let weekdd = String(weekday.getDate()).padStart(2, '0');\n        let weekmm = String(weekday.getMonth() + 1).padStart(2, '0');\n        let weekyyyy = weekday.getFullYear();\n        weekday = weekmm + '/' + weekdd + '/' + weekyyyy;\n        thisweek.push(weekday);\n    }\n    return thisweek;\n}\n\nfunction resetTodoForm() {\n    // Erase old projects display\n    todoItemsContainer.innerHTML = \"\";\n        \n    // Show all projects\n    showTodos();\n\n    // Reset and close form\n    todoForm.reset();\n    hideAddTodoForm();\n}\n\n// Set up todo content\nconst content = document.querySelector(\"#content\");\ncontent.classList.add(\"todo-content\");\n\nconst todoHeader = document.createElement(\"div\");\ntodoHeader.classList.add(\"todo-header\");\n\nconst todoTitle = document.createElement(\"h2\");\ntodoTitle.classList.add(\"todo-title\");\ntodoTitle.innerHTML = \"Inbox\";\ntodoHeader.appendChild(todoTitle);\n\nconst addTodoBtn = document.createElement(\"button\");\naddTodoBtn.type = \"button\";\naddTodoBtn.classList.add(\"add-todo-btn\");\naddTodoBtn.innerHTML = \"+\";\naddTodoBtn.addEventListener(\"click\", showAddTodoForm);\ntodoHeader.appendChild(addTodoBtn);\n\ncontent.appendChild(todoHeader);\n\nconst todoItemsContainer = document.createElement(\"div\");\ntodoItemsContainer.classList.add(\"todo-items-container\");\n\ncontent.appendChild(todoItemsContainer);\n\n// Todo variables\nconst todoForm = document.querySelector(\".new-todo-form\");\nconst addTodoHeader = document.querySelector(\"#add-todo-header\");\nconst newTodoTitle = document.querySelector(\"#new-todo-title\");\nconst newTodoDescription = document.querySelector(\"#new-todo-description\");\nconst newTodoDate = document.querySelector(\"#new-todo-date\");\nconst newTodoPriority = document.querySelector(\"#new-todo-priority\");\nconst newTodoLocation = document.querySelector(\"#todo-project-field\");\nconst cancelTodoBtn = document.querySelector(\"#cancel-todo-btn\");\ncancelTodoBtn.addEventListener(\"click\", hideAddTodoForm);\nconst saveTodoBtn = document.querySelector(\"#save-todo-btn\");\n\nconst deleteTodoBtnGroup = document.querySelector(\"#delete-todo-btn-group\");\n\n\n// Tabs\n\n// Set up tags depending which tab is clicked\nconst clickedEvent = (whichDate, whichProject) => {\n    return {\n        whichDate,\n        whichProject,\n    }\n};\n// Default is empty date and Inbox project\nlet currentClick = clickedEvent(\"\", \"Inbox\");\n\n// Tab view\nconst inboxTab = document.querySelector(\"#inbox-tab\");\ninboxTab.addEventListener(\"click\", () => {\n    currentClick.whichDate = \"\";\n    currentClick.whichProject = \"Inbox\";\n    todoTitle.innerHTML = \"Inbox\";\n    reset();\n    showTodos();\n});\n\nconst todayTab = document.querySelector(\"#today-tab\");\ntodayTab.addEventListener(\"click\", () => {\n    currentClick.whichProject = \"\";\n    currentClick.whichDate = \"Today\";\n    todoTitle.innerHTML = \"Today\";\n    reset();\n    showTodos();\n});\n\nconst weekTab = document.querySelector(\"#week-tab\");\nweekTab.addEventListener(\"click\", () => {\n    currentClick.whichProject = \"\";\n    currentClick.whichDate = \"Week\";\n    todoTitle.innerHTML = \"This Week\";\n    reset();\n    showTodos();\n});\n\nfunction reset() {\n    todoItemsContainer.innerHTML = \"\";\n    document.querySelector(\"#navbar-container\").classList.toggle(\"visible\");\n};\n\n// Projects\nfunction assignProjectTabs() {\n    const projectTitles = document.querySelectorAll(\".project-title\");\n    projectTitles.forEach(item => {\n        item.classList.add(item.innerText);\n        item.addEventListener(\"click\", () => {\n            currentClick.whichDate = \"\";\n            currentClick.whichProject = item.innerText;\n            todoTitle.innerHTML = item.innerText;\n            reset();\n            showTodos();\n        });\n    });\n}\n\n\n\n//# sourceURL=webpack://checklist/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;