import { projectUI } from "./project";
let activePage = "all";
let activeProject;
let projectArray;
const displayDiv = document.querySelector("#display");
const actualList = document.querySelector(".actualList");
let isButtonUp = true;

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

export function buttonAppear(){
    const addTodoButton = document.querySelector(".addTodoButton");
    addTodoButton.style.display = "table";
    isButtonUp = true;
}
//gets the current date
function getDate(){
    var today = new Date();
    document.getElementById("duedate").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}
