import { projectUI } from "./project";
let activePage = "all";
let activeProject;
let projectArray;
const displayDiv = document.querySelector("#display");
const actualList = document.querySelector(".actualList");

export function initialPageLoad() {

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
        pageChanger("dueNextWeek");
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

}

export function pageChanger(newPage, array) {
    if (newPage === undefined) {
        console.log("sent in from pageload");
        contentChanger(activePage, projectArray);
        return activePage;
    }
    if (array != undefined) {
        console.log(newPage);
        console.log(array);
        console.log("sent in to add to array");
        projectArray = array;
        activePage = newPage;
        contentChanger(newPage, projectArray);
        return activePage;
    } else {
        console.log("sent into refresh page");
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
            let deleteTodoBtn = document.createElement("button");
            todoTitle.textContent = todo.title;
            todoDescription.textContent = todo.description;
            todoDate.textContent = todo.date;
            todoDiv.appendChild(todoTitle);
            todoDiv.appendChild(todoDescription);
            todoDiv.appendChild(todoDate);
            displayDiv.appendChild(todoDiv);
        };

    };
}
