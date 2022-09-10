import {Human} from "./Human";
import {Human_Resource_Management} from "./Human_Resource_Management";

let p1 = new Human(1,"minh", "anh", "19/2/2002", "ha noi", 1);
let p2 = new Human(2,"hoang", "vu", "19/2/2003", "ha noi", 2);
let p3 = new Human(3,"trung", "hieu", "19/2/2003", "ha noi", 3);
let Human_Management = new Human_Resource_Management();

Human_Management.addHuman = p1;
Human_Management.addHuman = p2;
Human_Management.addHuman = p3;

// console.log(Human_Management.setAll);
// console.log("sau xoa")
//xoa mot phan tu trong mang list theo id
Human_Management.removeHuman(1);
//sua thuoc tinh fname theo doi tuong co id = 2
Human_Management.editHuman(2, "luu");
console.log(Human_Management.setAll);

