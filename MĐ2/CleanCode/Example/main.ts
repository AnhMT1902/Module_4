import {ManageCadres} from "./Staff_management";
import {Staff} from "./model/Staff";
import {Gender} from "./Enum/Gender";
import {Worker} from "./model/Worker";
import {Level} from "./Enum/Level";
import {Engineer} from "./model/Engineer";

let Manager = new ManageCadres();
let oneStaff = new Staff(1,"tran minh anh", 20, Gender.male, "ha noi", "CEO");
let tooStaff = new Staff(2,"hoang vu", 20, Gender.other, "ha nam", "Sale");
let threeStaff = new Staff(2,"gi hoang", 20, Gender.other, "ha nam", "Sale");
let oneWork = new Worker(3,"luu vu", 28, Gender.male, "son la", Level.ten);
let oneEngineer = new Engineer(4,"minh", 20, Gender.female, "hanoi", "Sale");
Manager.addProduct(oneStaff);
Manager.addProduct(tooStaff);
Manager.addProduct(threeStaff);
Manager.addProduct(oneWork);
Manager.addProduct(oneEngineer)
// console.log(Manager.showAll());
// console.log("------sau tim------")
console.log(Manager.searchName("an"));
// Manager.searchName("tran minh anh")