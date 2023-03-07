!console.log("hello");
//import { compareAsc, format } from 'date-fns';
import { todoFactory } from "./modules/todo";
import { projectFactory, projectsHolder } from "./modules/project";


const dance = todoFactory("dancing", "1/7");
const project = projectFactory("yahoo", [2,3], "bigdance")

console.log(dance);
console.log(project);
console.log(projectsHolder);