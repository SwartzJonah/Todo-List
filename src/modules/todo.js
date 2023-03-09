export const todoUI= () => {

    const todoFactory = (title, dueDate, description, priority, checkbox) => {
        let date = dueDate;
        let month = date.slice(5,7);
        let day = date.slice(8,10);
        let year = date.slice(0,4);
        date = `${month}-${day}-${year}`;
        return {title, date, priority, description, checkbox};
    };


    function addTodo(todo, project) {
        console.log("running todo");
        project.todoList.push(todo);
        return project;
    };

    function checkDuplicate(todo, project){
        let a = "nochange"
        let b = ""
        let c = "a"
        console.log(todo.title);
        console.log()
        
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
        
        console.log(a);
    }
        
    

return{ todoFactory, addTodo, checkDuplicate };
}



