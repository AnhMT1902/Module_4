import {InterfaceManage} from "../interface/InterfaceManage";
import {Magazine} from "../model/Magazine";
import {ManageDocument} from "./ManageDocument";

export class ManageMagazine implements InterfaceManage<Magazine>{
    static listMagazine: Magazine[] = [];
    addProduct(t: Magazine) {
        ManageMagazine.listMagazine.push(t)
        ManageDocument.listDocument.push(t);
    }

    findProductByCode() {
    }

    removeProduct(code: number) {
    }

    showAll() {
        console.log(ManageMagazine.listMagazine);
    }

}