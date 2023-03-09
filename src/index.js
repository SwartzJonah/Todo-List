//import { compareAsc, format } from 'date-fns';
import { todoUI } from "./modules/todo";
import { projectUI } from "./modules/project";
import { initialPageLoad, pageChanger } from "./modules/initial-page-load"
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
initialPageLoad();
//sets up initial array
const projectsArray = projectUI().setUpArray();

//This will tell file what project is open
let activePage = pageChanger("all", projectsArray);

let activeProject = projectsArray.find(project => project.title == activePage);
//console.log(activeProject);






//forms
const todopopup = document.querySelector("#todopopup");
const todoform = document.querySelector("#todoform");
todoform.addEventListener("submit", (event) => {
    activePage = pageChanger();
    let todoTitle = todoform.elements['title'];
    let todoDescription = todoform.elements['description'];
    let todoDate = todoform.elements['duedate'];
    let todoPriority = todoform.elements['priority'];
    let todoCompleted = todoform.elements['completed'];

    let todoToAdd = todoUI().todoFactory(
        todoTitle.value, todoDate.value, todoDescription.value,
        todoPriority.value, "false");

    if(todoUI().checkDuplicate(todoToAdd, projectsArray.find(project => project.title == "all"))) {
        todoUI().addTodo(todoToAdd, projectsArray.find(project => project.title == activePage));
        if (activePage != "all") {
            todoUI().addTodo(todoToAdd, projectsArray.find(project => project.title == "all"));
        }
        if (todoToAdd.date == currentDate && activePage != "dueToday") {
            todoUI().addTodo(todoToAdd, projectsArray.find(project => project.title == "dueToday"));
        }
        if (thisWeek(todoToAdd.date) == true && activePage != "dueThisWeek") {
            todoUI().addTodo(todoToAdd, projectsArray.find(project => project.title == "dueThisWeek"));
        }
        todoPopup.style.display ='none';
    } else {
        alert("Can't add duplicate todo");
    }
    console.log(projectsArray);
    pageChanger(activePage, projectsArray);
    event.preventDefault();
});


const projectform = document.querySelector("#projectform");
projectform.addEventListener("submit", (event) => {
    let projectTitle = projectform.elements['title'];
    let projectDescription = projectform.elements['description']
    let projectToAdd = projectUI().projectFactory(
        projectTitle.value, [], projectDescription.value);
    console.log(projectToAdd);
    projectUI().addProject(projectToAdd, projectsArray);
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

