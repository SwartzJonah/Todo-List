//import { compareAsc, format } from 'date-fns';
import { todoUI } from "./modules/todo";
import { projectUI,} from "./modules/project";
import { initialPageLoad } from "./modules/initial-page-load"
//starter states
initialPageLoad();
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}-${day}-${year}`;
const projectsArray = [];
const defaultProject = projectUI().projectFactory("Default", [], "Default Project");
projectUI().addProject(defaultProject, projectsArray);
console.log(projectsArray);
//This will tell file what project is open
let activePage = "allTodos";




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
    let todoToAdd = todoUI().todoFactory(
        todoTitle.value, todoDate.value, todoDescription.value, 
        todoPriority.value,todoCompleted.checked);
    console.log(todoToAdd);
    //todoform.reset();
    event.preventDefault();
});


const projectform = document.querySelector("#projectform");
projectform.addEventListener("submit", (event) => {
    let projectTitle = projectform.elements['title'];
    let projectDescription = projectform.elements['description']
    let projectToAdd = projectUI().projectFactory(
        projectTitle.value, [1, 2], projectDescription.value);
    console.log(projectToAdd);
    projectUI().addProject(projectToAdd, projectsArray);
    console.log(projectsArray);
    //projectform.reset();
    event.preventDefault();
    //adds to dom

});



