

export function getStorage() {
    //let storageArray = localStorage.getItem("data");
    // console.log(storageArray);
}

export function setStorage(projectArray) {
    let storageArray = projectArray;
    console.log(storageArray);
    for (let i = 0; i < storageArray.length; i++) {
        let project = storageArray[i];
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
    // for (let i = 0; i < storageArray.length; i++) { 
    //     let project = storageArray[i];  
    //     for (let j = 0; j < project.todoList.length; j++) {
    //         console.log(localStorage.getItem("project" + i + "todolist" + j + "title"));
    //         console.log(localStorage.getItem("project" + i + "todolist" + j + "date"));
    //         console.log(localStorage.getItem("project" + i + "todolist" + j + "description"));
    //         console.log(localStorage.getItem("project" + i + "todolist" + j + "priority"));
    //     }
    // }
}