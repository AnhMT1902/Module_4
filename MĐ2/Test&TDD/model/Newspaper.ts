import {Document} from "./Document";

export class Newspaper extends Document {
    private _day: number;

    constructor(code: number, producer: string, release: number, day: number) {
        super(code, producer, release);
        this._day = day;
    }

    get day(): number {
        return this._day;
    }

    set day(value: number) {
        this._day = value;
    }
}