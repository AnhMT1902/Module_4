import {Cadres} from "./Cadres";
import {Worker} from "./model/Worker";
import {Engineer} from "./model/Engineer";
import {Staff} from "./model/Staff";
import {Manager} from "./Interface/Manager";

let readlineSync = require('readline-sync');


export class ManageCadres implements Manager<Cadres> {

    removeProduct(id: number) {

    }

    Management: Cadres[] = [];

    showAll() {
        console.log(this.Management);
    }

    searchName(name: string) {
        return this.Management.filter(item => item.name.includes(name));
        // let flag = 0;
        // this.Management.forEach((item) => {
        //     if (item.name == name) {
        //         flag++;
        //         console.log(item);
        //     } else {
        //         item.name.split(" ").forEach((element) => {
        //             if (element == name) {
        //                 flag++;
        //                 console.log(item);
        //             }
        //         })
        //     }
        // })
        // if (flag == 0) {
        //     console.log("deo co")
        // }

        // @ts-ignore
    }

    addProduct(t: Cadres) {
        this.Management.push(t);
    }

    editProductById(id: number) {
        let flag = 0;
        this.Management.forEach((item) => {
            if (item.id == id) {
                flag++;
                let newName = readlineSync.question("ten ban muon thay doi");
                let newAge = readlineSync.question("tuoi ban muon thay doi");
                let newGender = readlineSync.question("gioi tinh ban muon thay doi");
                let newAddress = readlineSync.question("dia chi ban muon thay doi");
                if (newName == "") {
                    return item.name;
                } else {
                    return item.name = newName;
                }
                if (newAge == "") {
                    return item.age;
                } else {
                    return item.age = newAge;
                }
                if (newGender == "") {
                    return item.gender;
                } else {
                    return item.gender = newGender;
                }
                if (newAddress == "") {
                    return item.address;
                } else {
                    return item.address = newAddress;
                }
            }
        })
        if (flag == 0) {
            console.log(`object with id = ${id}. not found`);
        }
    }

    findProductByName(name: string) {
        return this.Management.filter(item => item.name.includes(name));


    }
}
