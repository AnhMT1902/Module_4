import {InterfaceManage} from "../interface/InterfaceManage";
import {Newspaper} from "../model/Newspaper";
import {ManageDocument} from "./ManageDocument";

export class ManageNewspaper implements InterfaceManage<Newspaper> {
    static listNewspaper: Newspaper[] = []

    addProduct(t: Newspaper) {
        ManageNewspaper.listNewspaper.push(t);
        ManageDocument.listDocument.push(t);

    }

    findProductByCode() {
    }

    removeProduct(code: number) {
    }

    showAll() {
        console.log(ManageNewspaper.listNewspaper)
    }

}