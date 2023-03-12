import { projectUI } from "./project";
import { todoUI } from "./todo";

export function getStorage(projectsArray) {
    let newArray = projectsArray;
    for (let i = 0; i < localStorage.getItem("storageLength"); i++) {
        if (i < 2) {
            let projectLength = localStorage.getItem("project" + i + "length");
        }
        if (i > 2) {
            let projectTitle = localStorage.getItem("project" + i + "title");
            let projectDescription = localStorage.getItem("project" + i + "description");
            let projectLength = localStorage.getItem("project" + i + "length");
            let projectToAdd = projectUI().projectFactory(
                projectTitle, [], projectDescription);
            projectUI().addProject(projectToAdd, newArray);
        }
        let projectLength = localStorage.getItem("project" + i + "length");
        for (let j = 0; j < projectLength; j++) {
            let todoTitle = (localStorage.getItem("project" + i + "todolist" + j + "title"));
            let todoDescription = (localStorage.getItem("project" + i + "todolist" + j + "description"));
            let todoDate = (localStorage.getItem("project" + i + "todolist" + j + "date"));
            let todoPriority = (localStorage.getItem("project" + i + "todolist" + j + "priority"));
            let todoToAdd = todoUI().todoFactory(
                todoTitle, todoDate, todoDescription,
                todoPriority, "true");
                todoUI().addTodo(todoToAdd, newArray[i]);
        }
    }
    console.log(projectsArray);
}

export function setStorage(projectArray) {
    let storageArray = projectArray;
    let storageArrayLength = storageArray.length;
    localStorage.setItem("storageLength", storageArrayLength);
    console.log(storageArrayLength);
    for (let i = 0; i < storageArray.length; i++) {
        let project = storageArray[i];
        let projectTitle = project.title;
        let projectDescription = project.description;
        let projectLength = project.todoList.length;
        localStorage.setItem("project" + i + "title", projectTitle);
        localStorage.setItem("project" + i + "description", projectDescription);
        localStorage.setItem("project" + i + "length", projectLength);
        console.log(projectLength);
        for (let j = 0; j < project.todoList.length; j++) {
            let todo = project.todoList[j];
            let todoTitle = todo.title;
            let todoDate = todo.date;
            let todoDescription = todo.description;
            let todoPriority = todo.priority;
            localStorage.setItem("project" + i + "todolist" + j + "title", todoTitle);
            localStorage.setItem("project" + i + "todolist" + j + "date", todoDate);
            localStorage.setItem("project" + i + "todolist" + j + "description", todoDescription);
            localStorage.setItem("project" + i + "todolist" + j + "priority", todoPriority);
        }
    }
}