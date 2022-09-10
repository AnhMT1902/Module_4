import {Human} from "./Human";

export class Human_Resource_Management {
    private list: Human[] = [];

    get setAll() {
        return this.list;
    }

    set addHuman(human: Human){
         this.list.push(human);
    }

    removeHuman(id:number) {
        this.list = this.list.filter((item) =>{
            return item.role != id;
        })
    }

    editHuman(id: number, firstname: string) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                this.list[i].firstname = firstname;
            }
        }
        return this.list;
    }
}