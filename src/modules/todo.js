export const todoUI= () => {

    const todoFactory = (title, dueDate, description, priority, checkbox) => {
        const sayTitle = () => console.log("I am a todo");
        return {title, dueDate, priority, description, checkbox, sayTitle };
    };


    function addTodo(todo, project) {
        project.todoList.push(todo);
        return project;
    };

return{ todoFactory, addTodo };
};

