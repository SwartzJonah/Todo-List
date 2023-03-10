export const todoUI= () => {

    const todoFactory = (title, dueDate, description, priority, checkbox) => {
        let date = dueDate;
        let month = date.slice(5,7);
        let day = date.slice(8,10);
        let year = date.slice(0,4);
        date = `${month}-${day}-${year}`;
        let tempTitle = title;
        let tempLetter = tempTitle.charAt(0).toUpperCase();
        let remains = tempTitle.slice(1);
        title = tempLetter + remains;
        return {title, date, priority, description, checkbox};
    };


    function addTodo(todo, project) {
        project.todoList.push(todo);
        return project;
    };

    function checkDuplicate(todo, project){
        let a = "nochange"
        let b = "" 
        if (project.todoList.find(project => project.title == todo.title) === undefined){
            a = "nodupe"
        } else {
            b = project.todoList.find(project => project.title == todo.title);
        }
        if (todo.title === b.title){
            a = "dupe"
            return false;
        } else {
            a = "no dupe"
            return true;
        }
    }
        
    

return{ todoFactory, addTodo, checkDuplicate };
}



