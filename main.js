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


const projectsArray = [];
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}-${day}-${year}`;
let nextWeekDate = `${month}-${day+7}-${year}`;
const projectUI = () => {

    const projectFactory = (title, todoList, description, deadline) => {

        return { title, todoList, description, deadline };
    }

    function setUpArray() {
        
        const allTodos = projectFactory("all", [], "All todos");

        const dueToday = projectFactory("dueToday", [], "things due today", currentDate);

        const dueWeek = projectFactory("dueThisWeek", [], "things due next week", nextWeekDate);

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
        if (project.title != "all" && project.title != "dueToday" && project.title != "dueThisWeek"){
            const projectTitle = project.title;
            const divAdd = document.createElement("li");
            divAdd.addEventListener("click", (event) => {
                (0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.pageChanger)(projectTitle);
                (0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.buttonAppear)();
            });
            divAdd.textContent = projectTitle;
            actualList.appendChild(divAdd);
        }
        array.push(project);
        return array;
    }

    return { projectFactory, addProject, setUpArray };

};

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonAppear": () => (/* binding */ buttonAppear),
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad),
/* harmony export */   "pageChanger": () => (/* binding */ pageChanger)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

let activePage = "all";
let activeProject;
let projectArray;
const displayDiv = document.querySelector("#display");
const actualList = document.querySelector(".actualList");
let isButtonUp = true;

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
        if (isButtonUp === false){
            addTodoButton.style.display = "table";
            isButtonUp = true;
        }
    });
    allTodos.textContent = "All Todos!";

    const dueToday = document.createElement("li");
    dueToday.addEventListener("click", (event) => {
        pageChanger("dueToday")
        if (isButtonUp === true){
            addTodoButton.style.display = "none";
            isButtonUp = false;
        }
    });
    dueToday.textContent = "Due Today!";


    const dueWeek = document.createElement("li");
    dueWeek.addEventListener("click", (event) => {
        pageChanger("dueThisWeek");
        if (isButtonUp === true){
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
    //things do today
    //things due this week
    //Projects with list of projects inside
    //button to add projects



    //displays the todo's for whatever is selected on sidebar
    //button to add todo's


    //Div for content panel which includes invisble forms for todos and projects
    const contentDiv = document.querySelector("#content");
    const addTodoButton = document.createElement("button");
    addTodoButton.classList.add("addTodoButton");
    addTodoButton.textContent ="Add A New Todo";
    contentDiv.appendChild(addTodoButton);

}

function pageChanger(newPage, array) {
    if (newPage === undefined) {
        contentChanger(activePage, projectArray);
        return activePage;
    }
    if (array != undefined) {
        projectArray = array;
        activePage = newPage;
        contentChanger(newPage, projectArray);
        return activePage;
    } else {
        activePage = newPage;
        contentChanger(newPage, projectArray);
        return activePage;
    }

}

//writes curernt project of todolists to dom
function contentChanger(page, array) {
    activeProject = array.find(project => project.title == page);
    console.log(activeProject.todoList);
    displayDiv.replaceChildren();
    if (activeProject.todoList.length > 0) {
        for (let i = 0; i < activeProject.todoList.length; i++) {
            let todo = activeProject.todoList[i];
            let todoDiv = document.createElement("div");
            todoDiv.classList.add("todoStyle");

            let todoTitle = document.createElement("p");
            let todoDescription = document.createElement("p");
            let todoDate = document.createElement("p");
            if (todo.priority == "light"){
                todoDiv.style.backgroundColor = "lightgreen";
            }
            if (todo.priority == "normal"){
                todoDiv.style.backgroundColor = "#bbd652";
            }
            if (todo.priority == "urgent"){
                todoDiv.style.backgroundColor = "lightcoral";
            }
            //delete button stuff
            let buttonsCtn = document.createElement("div");
            buttonsCtn.classList.add("buttonContainer");
            let deleteTodoBtn = document.createElement("button");
            deleteTodoBtn.classList.add("deleteTodoButton");
            deleteTodoBtn.textContent = "Delete";
            deleteTodoBtn.addEventListener("click", (event) => {
                deleteTodo(todo,activeProject,array);
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
function deleteTodo(todo, array, projectsarray){
    console.log(projectsarray[0]);
    console.log(projectsarray[1]);
    console.log(projectsarray[2]);
    let deletedTodo = array.todoList.find(project => project.title == todo.title);
    console.log(deletedTodo);
    if((projectsarray[0].todoList.indexOf(deletedTodo)) != -1){
        let allIndex = (projectsarray[0].todoList.indexOf(deletedTodo));
        projectsarray[0].todoList.splice(allIndex, 1);
    }
    if((projectsarray[1].todoList.indexOf(deletedTodo)) != -1){
        let dayIndex = (projectsarray[1].todoList.indexOf(deletedTodo));
        projectsarray[1].todoList.splice(dayIndex, 1);
    }
    if((projectsarray[2].todoList.indexOf(deletedTodo)) != -1){
        let weekIndex = (projectsarray[2].todoList.indexOf(deletedTodo));
        projectsarray[2].todoList.splice(weekIndex, 1);
    }
    if (array.title != "all" && array.title != "dueToday" && array.title != "dueThisWeek") {
        let index = array.todoList.indexOf(deletedTodo);
        array.todoList.splice(index, 1);
    }
    pageChanger();
}

function showTodoForm(){
    const todopopup = document.querySelector("#todopopup");
    todoPopup.style.display ='table';
}

function buttonAppear(){
    const addTodoButton = document.querySelector(".addTodoButton");
    addTodoButton.style.display = "table";
    isButtonUp = true;
}
//gets the current date
function getDate(){
    var today = new Date();
    document.getElementById("duedate").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
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
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
//import { compareAsc, format } from 'date-fns';



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
(0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_2__.initialPageLoad)();
//sets up initial array
const projectsArray = (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.projectUI)().setUpArray();

//This will tell file what project is open
let activePage = (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_2__.pageChanger)("all", projectsArray);

let activeProject = projectsArray.find(project => project.title == activePage);
//console.log(activeProject);






//forms
const todopopup = document.querySelector("#todopopup");
const todoform = document.querySelector("#todoform");
todoform.addEventListener("submit", (event) => {
    activePage = (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_2__.pageChanger)();
    let todoTitle = todoform.elements['title'];
    let todoDescription = todoform.elements['description'];
    let todoDate = todoform.elements['duedate'];
    let todoPriority = todoform.elements['priority'];
    let todoCompleted = todoform.elements['completed'];

    let todoToAdd = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().todoFactory(
        todoTitle.value, todoDate.value, todoDescription.value,
        todoPriority.value, "false");

    if((0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().checkDuplicate(todoToAdd, projectsArray.find(project => project.title == "all"))) {
        (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().addTodo(todoToAdd, projectsArray.find(project => project.title == activePage));
        if (activePage != "all") {
            (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().addTodo(todoToAdd, projectsArray.find(project => project.title == "all"));
        }
        if (todoToAdd.date == currentDate && activePage != "dueToday") {
            (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().addTodo(todoToAdd, projectsArray.find(project => project.title == "dueToday"));
        }
        if (thisWeek(todoToAdd.date) == true && activePage != "dueThisWeek") {
            (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().addTodo(todoToAdd, projectsArray.find(project => project.title == "dueThisWeek"));
        }
        todoPopup.style.display ='none';
    } else {
        alert("Can't add duplicate todo");
    }
    console.log(projectsArray);
    (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_2__.pageChanger)(activePage, projectsArray);
    event.preventDefault();
});


const projectform = document.querySelector("#projectform");
projectform.addEventListener("submit", (event) => {
    let projectTitle = projectform.elements['title'];
    let projectDescription = projectform.elements['description']
    let projectToAdd = (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.projectUI)().projectFactory(
        projectTitle.value, [], projectDescription.value);
    console.log(projectToAdd);
    (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.projectUI)().addProject(projectToAdd, projectsArray);
    console.log(projectsArray);
    //projectform.reset();
    event.preventDefault();
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


})();

/******/ })()
;