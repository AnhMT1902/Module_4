import {InterfaceManage} from "../interface/InterfaceManage";
import {Book} from "../model/Book";
import {ManageDocument} from "./ManageDocument";

export class ManageBook implements InterfaceManage<Book> {
    static listBook: Book[] = []

    addProduct(t: Book) {
        ManageBook.listBook.push(t);
        ManageDocument.listDocument.push(t);
    }

    findProductByCode() {
    }

    removeProduct(code: number) {
    }

    showAll() {
        console.log(ManageBook.listBook)
    }

}