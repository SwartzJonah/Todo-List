export const projectFactory = (title, todoList, description) => {
    
    const showTodo = () => console.log(todoList);
    return {title, todoList, description, showTodo};
}
