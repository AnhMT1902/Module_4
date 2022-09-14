import {InterfaceManage} from "../interface/InterfaceManage";
import {Book} from "../model/Book";
import {ManageBook} from "./ManageBook";
import {Magazine} from "../model/Magazine";
import {ManageMagazine} from "./ManageMagazine";
import {Newspaper} from "../model/Newspaper";
import {ManageNewspaper} from "./ManageNewspaper";
import {Document} from "../model/Document";

let readlineSync = require('readline-sync');

export class ManageDocument implements InterfaceManage<Document> {
    static listDocument: Document[] = [];

    addProduct(t: Document) {
        ManageDocument.listDocument.push(t);
        if (t instanceof Book) {
            ManageBook.listBook.push(t);
        }
        if (t instanceof Magazine) {
            ManageMagazine.listMagazine.push(t);
        }
        if (t instanceof Newspaper) {
            ManageNewspaper.listNewspaper.push(t);
        }
    }

    findProductByCode(code: number) {
        let flag = 0;
        let index = -1;
        for (let i = 0; i < ManageDocument.listDocument.length; i++) {
            if (ManageDocument.listDocument[i].code == code) {
                index = i
                flag++;
            }
        }
        if (flag == 0) {
            console.log("deo co")
        } else {
            console.log(ManageDocument.listDocument[index])
        }
        return index;
    }

    removeProduct(code: number) {
        ManageDocument.listDocument = ManageDocument.listDocument.filter(item => item.code != code);
        ManageBook.listBook = ManageBook.listBook.filter(item => item.code != code);
        ManageNewspaper.listNewspaper = ManageNewspaper.listNewspaper.filter(item => item.code != code);
        ManageMagazine.listMagazine = ManageMagazine.listMagazine.filter(item => item.code != code);
    }

    showAll() {
        console.log(ManageDocument.listDocument);
    }

    // editProductByCode(code: number) {
    //     let dataType = ManageDocument.listDocument[this.findProductByCode(code)]
    //     if (dataType instanceof Book) {
    //         readlineSync.
    //         dataType = new Book()
    //     }
    //     if () {
    //
    //     }
    // }
}