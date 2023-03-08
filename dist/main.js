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
        const sayTitle = () => console.log("I am a todo");
        return {title, dueDate, priority, description, checkbox, sayTitle };
    };


    function addTodo(todo, project) {
        project.todoList.push(todo);
        return project;
    };

return{ todoFactory, addTodo };

};



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

        const dueWeek = projectFactory("dueNextWeek", [], "things due next week", nextWeekDate);

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
        if (project.title != "all" && project.title != "dueToday" && project.title != "dueNextWeek"){
            const projectTitle = project.title;
            const divAdd = document.createElement("li");
            divAdd.addEventListener("click", (event) => {
                (0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.pageChanger)(projectTitle);
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
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad),
/* harmony export */   "pageChanger": () => (/* binding */ pageChanger)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

let activePage = "all";

function pageChanger(newPage){
    activePage = newPage;
    console.log(activePage);
    return activePage;
}

function initialPageLoad() {

    //Make Header
    const headerDiv = document.querySelector("#header");

    const sidebarDiv = document.querySelector("#sidebar");
        const sidebarList = document.createElement("ul");
            sidebarList.classList.add("sidebarlist");
            const allTodos = document.createElement("li");
            allTodos.addEventListener("click", (event) => {
                pageChanger("all");
            });
            allTodos.textContent = "All Todos!";
            const dueToday = document.createElement("li");
            dueToday.addEventListener("click", (event) => {
                pageChanger("dueToday")
            });
            dueToday.textContent = "Due Today!";
            const dueWeek = document.createElement("li");
            dueWeek.addEventListener("click", (event) => {
                console.log("dueNextWeek");
            });
            dueWeek.textContent = "Due This Week!";
            const projectsList = document.createElement("li");
            projectsList.textContent = "Projects";
            const actualList =  document.createElement("ul");
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

   

    const displayDiv = document.querySelector("#display");
    //displays the todo's for whatever is selected on sidebar
    //button to add todo's


    //Div for content panel which includes invisble forms for todos and projects
    const contentDiv = document.querySelector("#content");

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



//starter states
(0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_2__.initialPageLoad)();
const projectsArray = (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.projectUI)().setUpArray();
console.log(projectsArray);

//This will tell file what project is open
let activePage = (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_2__.pageChanger)("all");

let activeProject = projectsArray.find(project => project.title == activePage);
console.log(activeProject);






//forms
const todoform = document.querySelector("#todoform");
todoform.addEventListener("submit", (event) => {
    let todoTitle = todoform.elements['title'];
    let todoDescription = todoform.elements['description'];
    let todoDate = todoform.elements['duedate'];
    let todoPriority = todoform.elements['priority'];
    let todoCompleted = todoform.elements['completed'];
    console.log(todoTitle.value);
    console.log(todoDescription.value);
    console.log(todoDate.value);
    console.log(todoPriority.value);
    console.log(todoCompleted.checked);
    let todoToAdd = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().todoFactory(
        todoTitle.value, todoDate.value, todoDescription.value, 
        todoPriority.value,todoCompleted.checked);
    (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().addTodo(todoToAdd, activeProject);
    console.log(todoToAdd);
    console.log(activeProject);
    //todoform.reset();
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




})();

/******/ })()
;