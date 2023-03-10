//import { compareAsc, format } from 'date-fns';
import { todoUI } from "./modules/todo";
import { projectUI } from "./modules/project";
import { initialPageLoad, pageChanger, editTodo, getDate } from "./modules/initial-page-load"
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
const editPopup = document.querySelector("#editpopup");
const editform = document.querySelector("#editform");

editform.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(activePage);
    activePage = pageChanger();
    let editTitle = editform.elements['title'];
    let editDescription = editform.elements['description'];
    let editDate = editform.elements['duedate1'];
    let editPriority = editform.elements['priority'];
    let todoToEdit = todoUI().todoFactory(
        editTitle.value, editDate.value, editDescription.value,
        editPriority.value, "false");
    editTodo(todoToEdit, projectsArray.find(project => project.title == activePage));
    if (activePage != "all") {
        editTodo(todoToEdit, projectsArray.find(project => project.title == "all"));
    }
    if (todoToEdit.date != currentDate){
        editTodo(todoToEdit, projectsArray.find(project => project.title == "dueToday"), "remove");
    } else if (todoToEdit.date == currentDate && activePage != "dueToday") {
        editTodo(todoToEdit, projectsArray.find(project => project.title == "dueToday"));
    }
    if (thisWeek(todoToEdit.date) != true){
        editTodo(todoToEdit, projectsArray.find(project => project.title == "dueThisWeek"), "remove");
    }   else if (thisWeek(todoToEdit.date) == true && activePage != "dueThisWeek") {
        editTodo(todoToEdit, projectsArray.find(project => project.title == "dueThisWeek"));
    }
    editPopup.style.display = 'none';
    editform.reset();
    getDate();
    pageChanger(activePage, projectsArray);
});

//todoform
const todoPopup = document.querySelector("#todopopup");
const projectPopup = document.querySelector("#projectpopup");
const todoform = document.querySelector("#todoform");
todoform.addEventListener("submit", (event) => {
    event.preventDefault();
    activePage = pageChanger();
    let todoTitle = todoform.elements['title'];
    let todoDescription = todoform.elements['description'];
    let todoDate = todoform.elements['duedate'];
    let todoPriority = todoform.elements['priority'];


    let todoToAdd = todoUI().todoFactory(
        todoTitle.value, todoDate.value, todoDescription.value,
        todoPriority.value, "false");

    if (todoUI().checkDuplicate(todoToAdd, projectsArray.find(project => project.title == "all"))) {
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
        todoPopup.style.display = 'none';
        todoform.reset();
        getDate();
    } else {
        alert("Can't add duplicate todo");
    }

    pageChanger(activePage, projectsArray);
});

//project form
const projectform = document.querySelector("#projectform");
projectform.addEventListener("submit", (event) => {
    event.preventDefault();
    let projectTitle = projectform.elements['title'];
    let projectDescription = projectform.elements['description']
    let projectToAdd = projectUI().projectFactory(
        projectTitle.value, [], projectDescription.value);;
    projectUI().addProject(projectToAdd, projectsArray);
    projectPopup.style.display = 'none';
    projectform.reset();
    
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


//Future Additions 
//Sub-projects withing Projects
//Calendar view
//planing modules