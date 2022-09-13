import {Cadres} from "./Cadres";
import {Gender} from "./Enum/Gender";

export class Engineer extends Cadres {

    private _industry: string;

    constructor(id: number, name: string, age: number, gender: Gender, address: string, industry: string) {
        super(id, name, age, gender, address);
        this._industry = industry;
    }

    get industry(): string {
        return this._industry;
    }

    set industry(value: string) {
        this._industry = value;
    }

}