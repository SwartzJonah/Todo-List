import { pageChanger, buttonAppear } from "./initial-page-load"
let c = "";

const projectsArray = [];
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}-${day}-${year}`;
let nextWeekDate = `${month}-${day+7}-${year}`;
export const projectUI = () => {

    const projectFactory = (title, todoList, description,) => {

        return { title, todoList, description,};
    }

    function setUpArray() {
        
        const allTodos = projectFactory("all", [], "All todos");

        const dueToday = projectFactory("dueToday", [], "things due today", currentDate);

        const dueWeek = projectFactory("dueThisWeek", [], "things due next week", nextWeekDate);

        const defaultProject = projectFactory("Default", [], "Default Project");

        addProject(allTodos, projectsArray);
        addProject(dueToday, projectsArray);
        addProject(dueWeek, projectsArray);
        addProject(defaultProject, projectsArray);
        
        return projectsArray;
    }

    const actualList = document.querySelector(".actualList");
    //const alltasks = projectFactory("All Todos", [], "List of every todo")
    //const dueTodayProject = projectFactory("Due Today", [], "Todo's that must be done by today!");
    //const dueWeekProject = projectFactory("Due Today", [], "Todo's that must be done this week!")
    //const defaultProject = projectFactory("Default", [], "Default Project");

    //const projectsArray = [];
    // projectsArray.push(defaultProject);

    function addProject(project, array) {
        if (!exists(project,array)){

            if (project.title != "all" && project.title != "dueToday" && project.title != "dueThisWeek"){
                const projectTitle = project.title;
            const divAdd = document.createElement("li");
            divAdd.classList.add(project.title);
            divAdd.addEventListener("click", (event) => {
                pageChanger(projectTitle);
                buttonAppear();
                deleteProjectBtn();
            });
            divAdd.textContent = projectTitle;
            actualList.appendChild(divAdd);
        } 
            array.push(project);
            return array;
        }  
    }

    function deleteProjectBtn(){
        const deleteProjectButton = document.querySelector(".deleteProjectButton");
        deleteProjectButton.style.display = "table";
    }

    function exists(project, array){
        let b = project.title;
        c = array.find(project => project.title === b);
        if (c != undefined){
            if(c.title === b){
                return true;
            }
         }
    }

    return { projectFactory, addProject, setUpArray };

};