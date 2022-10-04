import {History} from "../Model/History";

export class ManageHistory {
    static listHistory: History[] = [];

    static addHistory(history: History) {
        ManageHistory.listHistory.push(history)
    }

    static showAll() {
        this.listHistory.forEach((item, index)=>{
            console.log(`STT: ${index + 1} Thoi gian: ${item.time}, Tong tien: ${item.money}, Chi tiet san pham: ${item.cart.showAll()}`)
        })
    }
}