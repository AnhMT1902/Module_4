//khai bao bien
import {ManageDocument} from "../manage/ManageDocument";
import {ManageBook} from "../manage/ManageBook";
import {ManageMagazine} from "../manage/ManageMagazine";
import {ManageNewspaper} from "../manage/ManageNewspaper";

let readlineSync = require('readline-sync');
let listDocument = new ManageDocument();
let listBook = new ManageBook();
let listMagazine = new ManageMagazine();
let listNewspaper = new ManageNewspaper();
let choiceDocument: number;
let choiceBook: number;


function showMenuDocument() {
    let menuDocument = `
CHÀO MỪNG BẠN ĐẾN VỚI THƯ VIỆN
----- Quản lý tài liệu ----- \n
1. Quản lý Sách
2. Quản lý Tạp Chí
3. Quản lý Báo
4. Xóa theo mã 
5. Tìm kiếm theo mã 
6. Hiển thị thư viện 
7. Hiển thị Sách 
8. Hiển thị Tạp Chí 
9. Hiển thị Báo  
0. Thoát khỏi chương trình 
`
    console.log(menuDocument)
}

function showMenuBook() {
    let menuBook = `
----- Quản lý sách ----- \n
1. Thêm sách
2. Tìm sách
3. Xóa sách theo mã
4. Tìm kiếm sách theo mã
5. Hiển thị thư viện Sách
0. Quay lại`
    console.log(menuBook);
}

do {
    showMenuDocument();
    choiceDocument = +readlineSync.question('Lua chon cua ban \n')
    switch (choiceDocument) {
        case 1:
            do {
                showMenuBook();
                choiceBook = +readlineSync.question('Lua chon cua ban \n')
            } while (choiceBook != 0)
            break;
    }
} while (choiceDocument != 0)