//import { compareAsc, format } from 'date-fns';
import { todoUI } from "./modules/todo";
import { projectUI} from "./modules/project";
import { initialPageLoad, pageChanger } from "./modules/initial-page-load"
//starter states
initialPageLoad();
const projectsArray = projectUI().setUpArray();

//This will tell file what project is open
let activePage = pageChanger("all", projectsArray);

let activeProject = projectsArray.find(project => project.title == activePage);
//console.log(activeProject);






//forms
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
    console.log(activePage);
    todoUI().addTodo(todoToAdd, projectsArray.find(project => project.title == activePage));
    //console.log(todoToAdd);
    //console.log(activeProject);
    console.log(projectsArray);
    //todoform.reset();
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



