//import { compareAsc, format } from 'date-fns';
import { todoUI } from "./modules/todo";
import { projectUI } from "./modules/project";
import { initialPageLoad } from "./modules/initial-page-load"
//starter states
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}-${day}-${year}`;
initialPageLoad();


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
    event.preventDefault();
});


const projectform = document.querySelector("#projectform");
projectform.addEventListener("submit", (event) => {
    let projectTitle = projectform.elements['title'];
    let projectDescription = projectform.elements['description']
    console.log(projectTitle.value);
    console.log(projectDescription.value);
    let projectToAdd = projectUI().projectFactory(projectTitle.value, [1, 2], projectDescription.value);
    console.log(projectToAdd);
    projectform.reset();
    event.preventDefault();
});


const dance = todoUI().todoFactory("dancing", "1/7");
const projecttest = projectUI().projectFactory("pewProject", [dance], "test");


console.log(dance);
console.log(projecttest);

