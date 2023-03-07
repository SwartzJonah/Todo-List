export const projectUI = () => {

    const projectFactory = (title, todoList, description) => {

        const showTodo = () => console.log(todoList);
        return { title, todoList, description, showTodo };
    }

    const alltasks = projectFactory("All Todos", [], "List of every todo")
    const dueTodayProject = projectFactory("Due Today", [], "Todo's that must be done by today!");
    const dueWeekProject = projectFactory("Due Today", [], "Todo's that must be done this week!")
    const defaultProject = projectFactory("Default", [], "Default Project");

    const projectsArray = [];
    projectsArray.push(defaultProject);
        
    return { projectFactory };
};