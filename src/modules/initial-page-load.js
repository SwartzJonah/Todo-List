import { projectUI } from "./project";
import { todoUI } from "./todo";
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

export function initialPageLoad() {
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

export function pageChanger(newPage, array) {
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
    console.log(activeProject);
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



export function editTodo(todo, array, remove) {
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

export function buttonAppear() {
    const addTodoButton = document.querySelector(".addTodoButton");
    addTodoButton.style.display = "table";
    isButtonUp = true;
}
//gets the current date
export function getDate() {
    var today = new Date();
    document.getElementById("duedate").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    document.getElementById("duedate1").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}
