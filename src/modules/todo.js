export const todoUI= () => {

    const todoFactory = (title, dueDate, description, priority, checkbox) => {
        let date = dueDate;
        let month = date.slice(5,7);
        let day = date.slice(8,10);
        let year = date.slice(0,4);
        date = `${month}-${day}-${year}`;
        console.log(date);
        return {title, date, priority, description, checkbox};
    };


    function addTodo(todo, project) {
        project.todoList.push(todo);
        return project;
    };

return{ todoFactory, addTodo };

};

