import {Cadres} from "./Cadres";
import {Level} from "./Enum/Level";
import {Gender} from "./Enum/Gender";

export class Worker extends Cadres {
    private _lever: Level;


    constructor(id: number, name: string, age: number, gender: Gender, address: string, lever: Level) {
        super(id, name, age, gender, address);
        this._lever = lever;
    }

    get lever(): Level {
        return this._lever;
    }

    set lever(value: Level) {
        this._lever = value;
    }
}