/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoUI": () => (/* binding */ todoUI)
/* harmony export */ });
const todoUI= () => {

    const todoFactory = (title, dueDate, description, priority, checkbox) => {
        let date = dueDate;
        let month = date.slice(5,7);
        let day = date.slice(8,10);
        let year = date.slice(0,4);
        date = `${month}-${day}-${year}`;
        let tempTitle = title;
        let tempLetter = tempTitle.charAt(0).toUpperCase();
        let remains = tempTitle.slice(1);
        title = tempLetter + remains;
        return {title, date, priority, description, checkbox};
    };


    function addTodo(todo, project) {
        project.todoList.push(todo);
        return project;
    };

    function checkDuplicate(todo, project){
        let a = "nochange"
        let b = "" 
        if (project.todoList.find(project => project.title == todo.title) === undefined){
            a = "nodupe"
        } else {
            b = project.todoList.find(project => project.title == todo.title);
        }
        if (todo.title === b.title){
            a = "dupe"
            return false;
        } else {
            a = "no dupe"
            return true;
        }
    }
        
    

return{ todoFactory, addTodo, checkDuplicate };
}





/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectUI": () => (/* binding */ projectUI)
/* harmony export */ });
/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

let c = "";

const projectsArray = [];
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}-${day}-${year}`;
let nextWeekDate = `${month}-${day+7}-${year}`;
const projectUI = () => {

    const projectFactory = (title, todoList, description,) => {
        if(title != "all" && title != "dueToday" &&
        title != "dueThisWeek"){
            let tempTitle = title;
            let tempLetter = tempTitle.charAt(0).toUpperCase();
            let remains = tempTitle.slice(1);
            title = tempLetter + remains;
    }

        return { title, todoList, description,};
    }

    function setUpArray() {
        
        const allTodos = projectFactory("all", [], "All Todos");

        const dueToday = projectFactory("dueToday", [], "Things Due Today", currentDate);

        const dueWeek = projectFactory("dueThisWeek", [], "Things Due This Week", nextWeekDate);

        const defaultProject = projectFactory("Default", [], "Default Project");

        addProject(allTodos, projectsArray);
        addProject(dueToday, projectsArray);
        addProject(dueWeek, projectsArray);
        addProject(defaultProject, projectsArray);
        
        return projectsArray;
    }

    const actualList = document.querySelector(".actualList");
    //const alltasks = projectFactory("All Todos", [], "List of every todo")
    //const dueTodayProject = projectFactory("Due Today", [], "Todo's that must be done by today!");
    //const dueWeekProject = projectFactory("Due Today", [], "Todo's that must be done this week!")
    //const defaultProject = projectFactory("Default", [], "Default Project");

    //const projectsArray = [];
    // projectsArray.push(defaultProject);

    function addProject(project, array) {
        if (!exists(project,array)){

            if (project.title != "all" && project.title != "dueToday" && project.title != "dueThisWeek"){
                const projectTitle = project.title;
            const divAdd = document.createElement("li");
            divAdd.classList.add(project.title);
            divAdd.addEventListener("click", (event) => {
                (0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.pageChanger)(projectTitle);
                (0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.buttonAppear)();
                deleteProjectBtn();
            });
            divAdd.textContent = "- "  + projectTitle;
            actualList.appendChild(divAdd);
        } 
            array.push(project);
            return array;
        }  
    }

    function deleteProjectBtn(){
        const deleteProjectButton = document.querySelector(".deleteProjectButton");
        deleteProjectButton.style.display = "table";
    }

    function exists(project, array){
        let b = project.title;
        c = array.find(project => project.title === b);
        if (c != undefined){
            if(c.title === b){
                return true;
            }
         }
    }

    return { projectFactory, addProject, setUpArray };

};

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonAppear": () => (/* binding */ buttonAppear),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad),
/* harmony export */   "pageChanger": () => (/* binding */ pageChanger)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



let activePage = "all";
let activeProject;
let projectArray;
const displayDiv = document.querySelector("#display");
const todoPopup = document.querySelector("#todopopup");
const editPopup = document.querySelector("#editpopup");
const editform = document.querySelector("#editform");
const projectPopup = document.querySelector("#projectpopup");
const actualList = document.querySelector(".actualList");
let isButtonUp = true;
let oldTodo;

function initialPageLoad() {
    getDate()

    //Make Header
    const headerDiv = document.querySelector("#header");
    const sidebarDiv = document.querySelector("#sidebar");
    const sidebarList = document.createElement("ul");
    sidebarList.classList.add("sidebarlist");
    const allTodos = document.createElement("li");
    allTodos.addEventListener("click", (event) => {
        pageChanger("all");
        deleteProjectBtn.style.display = "none";
        if (isButtonUp === false) {
            addTodoButton.style.display = "table";
            isButtonUp = true;
        }
    });
    allTodos.textContent = "All Todos!";

    const dueToday = document.createElement("li");
    dueToday.addEventListener("click", (event) => {
        deleteProjectBtn.style.display = "none";
        pageChanger("dueToday")
        if (isButtonUp === true) {
            addTodoButton.style.display = "none";
            isButtonUp = false;
        }
    });
    dueToday.textContent = "Due Today!";


    const dueWeek = document.createElement("li");
    dueWeek.addEventListener("click", (event) => {
        deleteProjectBtn.style.display = "none";
        pageChanger("dueThisWeek");
        if (isButtonUp === true) {
            addTodoButton.style.display = "none";
            isButtonUp = false;
        }
    });
    dueWeek.textContent = "Due This Week!";
    const projectsList = document.createElement("li");
    projectsList.textContent = "Projects";
    const actualList = document.createElement("ul");
    actualList.classList.add("actualList");
    sidebarList.appendChild(allTodos);
    sidebarList.appendChild(dueToday);
    sidebarList.appendChild(dueWeek);
    sidebarList.appendChild(projectsList);
    sidebarList.appendChild(actualList);
    sidebarDiv.appendChild(sidebarList);


    //Div for content panel which includes invisble forms for todos and projects
    const contentDiv = document.querySelector("#content");
    const addTodoButton = document.createElement("button");
    addTodoButton.addEventListener("click", (event) => {
        showTodoForm();
    });
    addTodoButton.classList.add("addTodoButton");
    addTodoButton.textContent = "Add A New Todo";
    contentDiv.appendChild(addTodoButton);

    const addProjectButton = document.createElement("button");
    addProjectButton.classList.add("addProjectButton");
    addProjectButton.textContent = "Add A New Project";
    addProjectButton.addEventListener("click", (event) => {
        showProjectForm();
    });
    contentDiv.appendChild(addProjectButton);

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.addEventListener("click", (event) => {
        deleteProject();
        deleteProjectBtn.style.display = "none";
    });
    deleteProjectBtn.classList.add("deleteProjectButton");
    deleteProjectBtn.textContent = "Delete Project";
    contentDiv.appendChild(deleteProjectBtn);
}

function pageChanger(newPage, array) {
    if (newPage === undefined) {
        contentChanger(activePage, projectArray);
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectArray);
        return activePage;
    }
    if (array != undefined) {
        projectArray = array;
        activePage = newPage;
        contentChanger(newPage, projectArray);
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectArray);
        return activePage;
    } else {
        activePage = newPage;
        contentChanger(newPage, projectArray);
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectArray);
        return activePage;
    }

}

//writes curernt project of todolists to dom
function contentChanger(page, array) {
    activeProject = array.find(project => project.title == page);
    displayDiv.replaceChildren();
    let projectTitleDiv = document.createElement("div");
    if(activeProject.title == "all" || activeProject.title == "dueToday" ||
    activeProject.title == "dueThisWeek"){
        projectTitleDiv.classList.add("projectHeader");
        projectTitleDiv.textContent = activeProject.description;
        displayDiv.appendChild(projectTitleDiv);
    } else {
        projectTitleDiv.classList.add("projectHeader");
        projectTitleDiv.textContent = activeProject.title;
        displayDiv.appendChild(projectTitleDiv);
    }
    //projectTitleDiv.textContent = 
    if (activeProject.todoList.length > 0) {
        for (let i = 0; i < activeProject.todoList.length; i++) {
            let todo = activeProject.todoList[i];
            let todoDiv = document.createElement("div");
            todoDiv.classList.add("todoStyle");

            let todoTitle = document.createElement("div");
            todoTitle.classList.add("todoTitle");
            let todoDescription = document.createElement("div");
            todoDescription.classList.add("todoDescription");
            let todoDate = document.createElement("div");
            todoDate.classList.add("todoDate");
            if (todo.priority == "light") {
                todoDiv.style.backgroundColor = "#C2DDB6 ";
            }
            if (todo.priority == "normal") {
                todoDiv.style.backgroundColor = "#F8CB9C";
            }
            if (todo.priority == "urgent") {
                todoDiv.style.backgroundColor = "lightcoral";
            }
            //edit/delete button stuff
            let buttonsCtn = document.createElement("div");
            buttonsCtn.classList.add("buttonContainer");
            let editTodoBtn = document.createElement("button");
            editTodoBtn.classList.add("editTodoButton");
            editTodoBtn.textContent = "Edit";
            editTodoBtn.addEventListener("click", (event) => {
                oldTodo = todo;
                editPopup.style.display = "table";
            });
            buttonsCtn.appendChild(editTodoBtn);

            let deleteTodoBtn = document.createElement("button");
            deleteTodoBtn.classList.add("deleteTodoButton");
            deleteTodoBtn.textContent = "Delete";
            deleteTodoBtn.addEventListener("click", (event) => {
                deleteTodo(todo, activeProject, array);
            });
            buttonsCtn.appendChild(deleteTodoBtn);


            todoTitle.textContent = todo.title;
            todoDescription.textContent = todo.description;
            todoDate.textContent = todo.date;
            todoDiv.appendChild(todoTitle);
            todoDiv.appendChild(todoDescription);
            todoDiv.appendChild(todoDate);
            todoDiv.appendChild(buttonsCtn);
            displayDiv.appendChild(todoDiv);
        };
        
    };
}

//deletes todos
function deleteTodo(todo, array, projectsarray) {
    let deletedTodo = array.todoList.find(project => project.title == todo.title);
    console.log(deletedTodo);
    if ((projectsarray[0].todoList.indexOf(deletedTodo)) != -1) {
        let allIndex = (projectsarray[0].todoList.indexOf(deletedTodo));
        projectsarray[0].todoList.splice(allIndex, 1);
    }
    if ((projectsarray[1].todoList.indexOf(deletedTodo)) != -1) {
        let dayIndex = (projectsarray[1].todoList.indexOf(deletedTodo));
        projectsarray[1].todoList.splice(dayIndex, 1);
    }
    if ((projectsarray[2].todoList.indexOf(deletedTodo)) != -1) {
        let weekIndex = (projectsarray[2].todoList.indexOf(deletedTodo));
        projectsarray[2].todoList.splice(weekIndex, 1);
    }
    if (array.title != "all" && array.title != "dueToday" && array.title != "dueThisWeek") {
        let index = array.todoList.indexOf(deletedTodo);
        array.todoList.splice(index, 1);
    }
    pageChanger();
}

function deleteProject(){
    let pageToDelete = pageChanger();
    let test = "." + pageToDelete;
    const projectList = document.querySelector(test);
    projectList.remove();
    let testPage = projectArray.findIndex(element => element.title === pageToDelete);
    if(testPage != undefined){
        projectArray.splice(testPage, 1);
        console.log(projectArray);
        pageChanger("all");
    } 
}



function editTodo(todo, array, remove) {
    if (remove != "remove") {
        let editedTodo = oldTodo;
        let newTodo = todo;
        let index = array.todoList.indexOf(editedTodo);
        array.todoList[index] = newTodo;
    } else {
        let editedTodo = oldTodo;
        let index = array.todoList.indexOf(editedTodo);
        array.todoList.splice(index, 1);
    }
    pageChanger();
    

    // }
}

function showTodoForm() {
    todoPopup.style.display = 'table';
}

function showProjectForm() {
    projectPopup.style.display = 'table';
}

function buttonAppear() {
    const addTodoButton = document.querySelector(".addTodoButton");
    addTodoButton.style.display = "table";
    isButtonUp = true;
}
//gets the current date
function getDate() {
    var today = new Date();
    document.getElementById("duedate").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    document.getElementById("duedate1").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "setStorage": () => (/* binding */ setStorage)
/* harmony export */ });


function getStorage() {
    //let storageArray = localStorage.getItem("data");
    // console.log(storageArray);
}

function setStorage(projectArray) {
    let storageArray = projectArray;
    console.log(storageArray);
    for (let i = 0; i < storageArray.length; i++) {
        let project = storageArray[i];
        for (let j = 0; j < project.todoList.length; j++) {
            let todo = project.todoList[j];
            let todoTitle = todo.title;
            let todoDate = todo.date;
            let todoDescription = todo.description;
            let todoPriority = todo.priority;
            localStorage.setItem("project" + i + "todolist" + j + "title", todoTitle);
            localStorage.setItem("project" + i + "todolist" + j + "date", todoDate);
            localStorage.setItem("project" + i + "todolist" + j + "description", todoDescription);
            localStorage.setItem("project" + i + "todolist" + j + "priority", todoPriority);
            
        }
    }
    // for (let i = 0; i < storageArray.length; i++) { 
    //     let project = storageArray[i];  
    //     for (let j = 0; j < project.todoList.length; j++) {
    //         console.log(localStorage.getItem("project" + i + "todolist" + j + "title"));
    //         console.log(localStorage.getItem("project" + i + "todolist" + j + "date"));
    //         console.log(localStorage.getItem("project" + i + "todolist" + j + "description"));
    //         console.log(localStorage.getItem("project" + i + "todolist" + j + "priority"));
    //     }
    // }
}

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);




const todayDate = new Date();
let day = todayDate.getDate();
if (day <= 9) {
    day = "0" + day;

}
let month = todayDate.getMonth() + 1;
if (month <= 9) {
    month = "0" + month;
}

let year = todayDate.getFullYear();
let currentDate = `${month}-${day}-${year}`;

//starter states
(0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.initialPageLoad)();
//sets up initial array
(0,_modules_storage__WEBPACK_IMPORTED_MODULE_0__.getStorage)();
const projectsArray = (0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.projectUI)().setUpArray();

//This will tell file what project is open
let activePage = (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.pageChanger)("all", projectsArray);

let activeProject = projectsArray.find(project => project.title == activePage);
//console.log(activeProject);






//forms
const editPopup = document.querySelector("#editpopup");
const editform = document.querySelector("#editform");

editform.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(activePage);
    activePage = (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.pageChanger)();
    let editTitle = editform.elements['title'];
    let editDescription = editform.elements['description'];
    let editDate = editform.elements['duedate1'];
    let editPriority = editform.elements['priority'];
    let todoToEdit = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoUI)().todoFactory(
        editTitle.value, editDate.value, editDescription.value,
        editPriority.value, "false");
    (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.editTodo)(todoToEdit, projectsArray.find(project => project.title == activePage));
    if (activePage != "all") {
        (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.editTodo)(todoToEdit, projectsArray.find(project => project.title == "all"));
    }
    if (todoToEdit.date != currentDate){
        (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.editTodo)(todoToEdit, projectsArray.find(project => project.title == "dueToday"), "remove");
    } else if (todoToEdit.date == currentDate && activePage != "dueToday") {
        (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.editTodo)(todoToEdit, projectsArray.find(project => project.title == "dueToday"));
    }
    if (thisWeek(todoToEdit.date) != true){
        (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.editTodo)(todoToEdit, projectsArray.find(project => project.title == "dueThisWeek"), "remove");
    }   else if (thisWeek(todoToEdit.date) == true && activePage != "dueThisWeek") {
        (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.editTodo)(todoToEdit, projectsArray.find(project => project.title == "dueThisWeek"));
    }
    editPopup.style.display = 'none';
    editform.reset();
    (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.getDate)();
    (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.pageChanger)(activePage, projectsArray);
    (0,_modules_storage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectsArray);
});

//todoform
const todoPopup = document.querySelector("#todopopup");
const projectPopup = document.querySelector("#projectpopup");
const todoform = document.querySelector("#todoform");
todoform.addEventListener("submit", (event) => {
    event.preventDefault();
    activePage = (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.pageChanger)();
    let todoTitle = todoform.elements['title'];
    let todoDescription = todoform.elements['description'];
    let todoDate = todoform.elements['duedate'];
    let todoPriority = todoform.elements['priority'];


    let todoToAdd = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoUI)().todoFactory(
        todoTitle.value, todoDate.value, todoDescription.value,
        todoPriority.value, "false");

    if ((0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoUI)().checkDuplicate(todoToAdd, projectsArray.find(project => project.title == "all"))) {
        (0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoUI)().addTodo(todoToAdd, projectsArray.find(project => project.title == activePage));
        if (activePage != "all") {
            (0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoUI)().addTodo(todoToAdd, projectsArray.find(project => project.title == "all"));
        }
        if (todoToAdd.date == currentDate && activePage != "dueToday") {
            (0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoUI)().addTodo(todoToAdd, projectsArray.find(project => project.title == "dueToday"));
        }
        if (thisWeek(todoToAdd.date) == true && activePage != "dueThisWeek") {
            (0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoUI)().addTodo(todoToAdd, projectsArray.find(project => project.title == "dueThisWeek"));
        }
        todoPopup.style.display = 'none';
        todoform.reset();
        (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.getDate)();
    } else {
        alert("Can't add duplicate todo");
    }

    (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_3__.pageChanger)(activePage, projectsArray);
    (0,_modules_storage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectsArray);
});

//project form
const projectform = document.querySelector("#projectform");
projectform.addEventListener("submit", (event) => {
    event.preventDefault();
    let projectTitle = projectform.elements['title'];
    let projectDescription = projectform.elements['description']
    let projectToAdd = (0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.projectUI)().projectFactory(
        projectTitle.value, [], projectDescription.value);;
    (0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.projectUI)().addProject(projectToAdd, projectsArray);
    projectPopup.style.display = 'none';
    projectform.reset();
    (0,_modules_storage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectsArray);
    //adds to dom

});

function thisWeek(date) {
    let dayOf = date.slice(3, 5)
    let todaytest = todayDate.getDate();
    let endofweek = todaytest + 7;
    if (dayOf >= todaytest && dayOf <= endofweek) {
        return true;
    }
}


//Future Additions 
//Sub-projects withing Projects
//Calendar view
//planing modules
})();

/******/ })()
;