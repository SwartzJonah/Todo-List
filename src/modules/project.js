
export const projectUI = () => {

    const projectFactory = (title, todoList, description) => {

        const showTodo = () => console.log(todoList);
        return { title, todoList, description, showTodo };
    }
    const actualList = document.querySelector(".actualList");
    const alltasks = projectFactory("All Todos", [], "List of every todo")
    const dueTodayProject = projectFactory("Due Today", [], "Todo's that must be done by today!");
    const dueWeekProject = projectFactory("Due Today", [], "Todo's that must be done this week!")
    //const defaultProject = projectFactory("Default", [], "Default Project");

    //const projectsArray = [];
   // projectsArray.push(defaultProject);

    function addProject(project, array){
        console.log(project.title);
        const projectTitle = project.title;
        const divAdd = document.createElement("li");
        divAdd.textContent = projectTitle;
        console.log(divAdd);
        console.log(actualList);
        actualList.appendChild(divAdd);
        array.push(project);

        return array;
    }
        
return { projectFactory, addProject };

};