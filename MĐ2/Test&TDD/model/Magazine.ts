import {Document} from "./Document";

export class Magazine extends Document {
    private _issue: number;
    private _month: number;

    constructor(code: number, producer: string, release: number, issue: number, month: number) {
        super(code, producer, release);
        this._issue = issue;
        this._month = month;
    }

    get issue(): number {
        return this._issue;
    }

    set issue(value: number) {
        this._issue = value;
    }

    get month(): number {
        return this._month;
    }

    set month(value: number) {
        this._month = value;
    }
}