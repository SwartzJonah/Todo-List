!console.log("hello");
//import { compareAsc, format } from 'date-fns';
import { todoFactory } from "./modules/todo";
import { projectFactory } from "./modules/project";


const dance = todoFactory("dancing", "1/7");
const project = projectFactory("yahoo", [2,3], "bigdance")

dance.sayTitle();
project.showTodo();