import {Admin} from "../Model/Admin";

let inp = require('readline-sync');
let admin = new Admin();
let choice: number;

function adminController() {
    while (choice != 0) {
        menuLogIn();
        choice = +inp.question("Lua chon cua ban: ")
        switch (choice) {
            case 1:
                logIn();
                break;
        }
    }
}

adminController();

function menuLogIn() {
    console.log("----Dang nhap duoi quyen ADMIN----\n1. Dang nhap\n0. Thoat");
}

function logIn() {

}