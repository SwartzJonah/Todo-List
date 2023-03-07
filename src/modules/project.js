export const projectFactory = (title, todoList, description) => {
    
    const showTodo = () => console.log(todoList);
    return {title, todoList, description, showTodo};
}

const defaultProject = projectFactory("Default", [], "Default Project");

export const projectsHolder = (() => {
    const projectsArray = [];
    projectsArray.push(defaultProject);
    return { projectsArray};
})();