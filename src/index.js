//import { compareAsc, format } from 'date-fns';
import {todoUI} from "./modules/todo";
import { projectUI } from "./modules/project";
import { initialPageLoad } from "./modules/initial-page-load"
//starter states
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;

initialPageLoad();
const dance = todoUI().todoFactory("dancing", "1/7");
const projecttest = projectUI().projectFactory("pewProject", [dance], "test")


console.log(dance);
console.log(projecttest);

