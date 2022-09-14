"use strict";
exports.__esModule = true;
var ManageDocument_1 = require("../manage/ManageDocument");
var Book_1 = require("../model/Book");
var ManageBook_1 = require("../manage/ManageBook");
var ManageMagazine_1 = require("../manage/ManageMagazine");
var ManageNewspaper_1 = require("../manage/ManageNewspaper");
var Magazine_1 = require("../model/Magazine");
var Newspaper_1 = require("../model/Newspaper");
var Document_1 = require("../model/Document");
var listDocument = new ManageDocument_1.ManageDocument();
var listBook = new ManageBook_1.ManageBook();
var listMagazine = new ManageMagazine_1.ManageMagazine();
var listNewspaper = new ManageNewspaper_1.ManageNewspaper();
var readlineSync = require('readline-sync');
var inpMenu;
var menu = "\n----- Qu\u1EA3n l\u00FD t\u00E0i li\u1EC7u ----- \n\n1. Qu\u1EA3n l\u00FD th\u01B0 vi\u1EC7n s\u00E1ch\n2. X\u00F3a theo m\u00E3 \n3. T\u00ECm ki\u1EBFm theo m\u00E3 \n4. Hi\u1EC3n th\u1ECB th\u01B0 vi\u1EC7n \n5. Hi\u1EC3n th\u1ECB S\u00E1ch \n6. Hi\u1EC3n th\u1ECB T\u1EA1p Ch\u00ED \n7. Hi\u1EC3n th\u1ECB B\u00E1o  \n0. Tho\u00E1t kh\u1ECFi ch\u01B0\u01A1ng tr\u00ECnh \n";
var menuDocument = "\n1. Th\u00EAm S\u00E1ch \n2. Th\u00EAm T\u1EA1p Ch\u00ED\n3. Th\u00EAm B\u00E1o\n";
// let arrId: number[] = []
// function randomId() {
//         let id = Math.floor(Math.random() * 10);
//         let index = arrId.indexOf(id)
//         if (index == -1) {
//             arrId.push(id);
//             return id;
//         }else randomId();
// }
while (inpMenu != 0) {
    console.log(menu);
    inpMenu = +readlineSync.question("Lua chon cua ban: \n");
    switch (inpMenu) {
        case 1:
            console.log(menuDocument);
            inpMenu = +readlineSync.question("Tai lieu ban muon them: \n");
            var product = readlineSync.question("Nha xuat ban: \n");
            var release = +readlineSync.question("So luong: \n");
            switch (inpMenu) {
                case 1:
                    var author = readlineSync.question("Tac gia: \n");
                    var page = +readlineSync.question("So trang: \n");
                    listDocument.addProduct(new Book_1.Book(Document_1.Document.randomId(), product, release, author, page));
                    break;
                case 2:
                    var issue = +readlineSync.question("So luong phat hanh: \n");
                    var month = +readlineSync.question("Thang phat hanh: \n");
                    listDocument.addProduct(new Magazine_1.Magazine(Document_1.Document.randomId(), product, release, issue, month));
                    break;
                case 3:
                    var day = +readlineSync.question("Ngay phat hanh: \n");
                    listDocument.addProduct(new Newspaper_1.Newspaper(Document_1.Document.randomId(), product, release, day));
                    break;
            }
            break;
        case 2:
            inpMenu = +readlineSync.question("ma tai lieu ban muon xoa: \n");
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
