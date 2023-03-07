!console.log("hello");
//import { compareAsc, format } from 'date-fns';
import {todoUI} from "./modules/todo";
import { projectUI } from "./modules/project";
import { initialPageLoad } from "./modules/initial-page-load"


const dance = todoUI().todoFactory("dancing", "1/7");
const projecttest = projectUI().projectFactory("pewProject", [dance], "test")

console.log(dance);
console.log(projecttest)
