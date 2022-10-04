import {Food} from "../Model/Food";
import {Service} from "../Model/Service";
let inp = require('readline-sync')

export class Restaurant {
   private name: string;
   private address: string;
    listFood: Food[] = [];
    listService: Service[] = [];


    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    addFood() {
        let name: string = inp.question("nhap ten mon: ");
        let price: number = +inp.question("nhap gia mon: ");
        let amount: number = +inp.question("so luong mon: ");
        let temp = 0;
        this.listFood.forEach((item)=> {
            if (item.name == name) {
                item.amount += amount;
                temp++;
            }
        })
        if (temp == 0) {
            this.listFood.push(new Food(name, price, amount));
        }
    }
    showFood(){
        this.listFood.forEach((item, index)=>{
            console.log(`${index + 1}. ten mon: ${item.name}, gia mon: ${item.price}, so luong: ${item.amount}`)
        })
    }
}