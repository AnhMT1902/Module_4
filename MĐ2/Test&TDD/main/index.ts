import {ManageDocument} from "../manage/ManageDocument";
import {Book} from "../model/Book";
import {ManageBook} from "../manage/ManageBook";
import {ManageMagazine} from "../manage/ManageMagazine";
import {ManageNewspaper} from "../manage/ManageNewspaper";
import {Magazine} from "../model/Magazine";
import {Newspaper} from "../model/Newspaper";

let listDocument = new ManageDocument();
let listBook = new ManageBook();
let listMagazine = new ManageMagazine();
let listNewspaper = new ManageNewspaper();
let readlineSync = require('readline-sync');
let inpMenu;
let menu = `
----- Quản lý tài liệu ----- \n
1. Thêm mới 
2. Xóa theo mã 
3. Tìm kiếm theo mã 
4. Hiển thị thư viện 
5. Hiển thị Sách 
6. Hiển thị Tạp Chí 
7. Hiển thị Báo  
0. Thoát khỏi chương trình 
`

let menuDocument = `
1. Thêm Sách 
2. Thêm Tạp Chí
3. Thêm Báo
`
while (inpMenu != 0) {
    console.log(menu)
    inpMenu = +readlineSync.question("Lua chon cua ban: \n");
    switch (inpMenu) {
        case 1:
            console.log(menuDocument)
            inpMenu = +readlineSync.question("Tai lieu ban muon them: \n")
            let code = +readlineSync.question("Ma tai lieu: \n");
            let product = readlineSync.question("Nha xuat ban: \n");
            let release = +readlineSync.question("So luong: \n");
            switch (inpMenu) {
                case 1:
                    let author = readlineSync.question("Tac gia: \n");
                    let page = +readlineSync.question("So trang: \n");
                    listDocument.addProduct(new Book(code, product,release,author,page));
                    break;
                case 2:
                    let issue = +readlineSync.question("So luong phat hanh: \n");
                    let month = +readlineSync.question("Thang phat hanh: \n");
                    listDocument.addProduct(new Magazine(code, product,release,issue,month));
                    break;
                case 3:
                    let day = +readlineSync.question("Ngay phat hanh: \n");
                    listDocument.addProduct(new Newspaper(code, product,release,day));
                    break;
            }
            break;
        case 2:
            inpMenu = +readlineSync.question("ma tai lieu ban muon xoa: \n")
            listDocument.removeProduct(inpMenu);
            break;
        case 3:
            inpMenu = +readlineSync.question("ma tai lieu ban muon tim: \n");
            listDocument.findProductByCode(inpMenu);
            break;
        case 4:
            listDocument.showAll();
            break;
        case 5:
            listBook.showAll();
            break;
        case 6:
            listMagazine.showAll();
            break;
        case 7:
            listNewspaper.showAll();
            break;
    }
}