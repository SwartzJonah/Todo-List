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

    const todoFactory = (title, dueDate, priority, description, checkbox) => {
        const sayTitle = () => console.log("I am a todo");
        return {title, dueDate, priority, description, checkbox, sayTitle };
    };
return{ todoFactory };
};



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectUI": () => (/* binding */ projectUI)
/* harmony export */ });
const projectUI = () => {

    const projectFactory = (title, todoList, description) => {

        const showTodo = () => console.log(todoList);
        return { title, todoList, description, showTodo };
    }

    const dueTodayProject = projectFactory("Due Today", [], "Todo's that must be done by today!");
    const dueWeekProject = projectFactory("Due Today", [], "Todo's that must be done this week!")
    const defaultProject = projectFactory("Default", [], "Default Project");

    const projectsArray = [];
    projectsArray.push(defaultProject);
        
    return { projectFactory };
};

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad)
/* harmony export */ });
function initialPageLoad() {

    //Make Header
    const headerDiv = document.querySelector("#header");

    const sidebarDiv = document.querySelector("#sidebar");
        const sidebarList = document.createElement("ul");
            sidebarList.classList.add("sidebarlist");
            const allTodos = document.createElement("li");
            allTodos.textContent = "Todos!";
            const dueToday = document.createElement("li");
            dueToday.textContent = "Due Today!";
            const dueWeek = document.createElement("li");
            dueWeek.textContent = "Due This Week!";
            const projectsList = document.createElement("li");
            projectsList.textContent = "Projects";
            const actualList =  document.createElement("ul");
            actualList.classList.add("projectslist");
                const defaultProject = document.createElement("li");
                defaultProject.textContent = "Default";
            actualList.appendChild(defaultProject);
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
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;

(0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_2__.initialPageLoad)();
const dance = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.todoUI)().todoFactory("dancing", "1/7");
const projecttest = (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.projectUI)().projectFactory("pewProject", [dance], "test")


console.log(dance);
console.log(projecttest);


})();

/******/ })()
;