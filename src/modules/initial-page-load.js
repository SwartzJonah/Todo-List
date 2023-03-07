export function initialPageLoad() {

    //Make Header
    const headerDiv = document.querySelector("#header");

    const sidebarDiv = document.querySelector("#sidebar");
        const sidebarList = document.createElement("ul");
            sidebarList.classList.add("sidebarlist");
            const allTodos = document.createElement("li");
            allTodos.textContent = "Todos!";
            const dueToday = document.createElement("li");
            dueToday.textContent = "Due Today!";
            const dueWeek = document.createElement("li");
            dueWeek.textContent = "Due This Week!";
            const projectsList = document.createElement("li");
            projectsList.textContent = "Projects";
            const actualList =  document.createElement("ul");
            actualList.classList.add("projectslist");
                const defaultProject = document.createElement("li");
                defaultProject.textContent = "Default";
            actualList.appendChild(defaultProject);
            sidebarList.appendChild(allTodos);
            sidebarList.appendChild(dueToday);
            sidebarList.appendChild(dueWeek);
            sidebarList.appendChild(projectsList);
            sidebarList.appendChild(actualList);
    sidebarDiv.appendChild(sidebarList);
    //things do today
    //things due this week
    //Projects with list of projects inside
    //button to add projects


    const displayDiv = document.querySelector("#display");
    //displays the todo's for whatever is selected on sidebar
    //button to add todo's


    //Div for content panel which includes invisble forms for todos and projects
    const contentDiv = document.querySelector("#content");

}