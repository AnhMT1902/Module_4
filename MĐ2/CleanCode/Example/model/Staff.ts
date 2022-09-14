import {Cadres} from "../Cadres";
import {Gender} from "../Enum/Gender";

export class Staff extends Cadres {
    private _work: string;


    constructor(id: number, name: string, age: number, gender: Gender, address: string, work: string) {
        super(id, name, age, gender, address);
        this._work = work;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
}