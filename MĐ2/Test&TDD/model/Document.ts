import {Id} from "../const/Id";

export class Document {
    protected _code: number = 0;
    private _producer: string;
    private _release: number;
    static temp: number = Math.floor(Math.random() * 100);

    constructor(code: number, producer: string, release: number) {
        this._code = Document.randomId();
        this._producer = producer;
        this._release = release;
    }

    static randomId() {
        let newId = +Document.temp
        if (Id.id.indexOf(newId) == -1 || Id.id == []) {
            Id.id.push(newId)
            return newId
        } else this.randomId();
    }

    get code(): number {
        return this._code;
    }

    set code(value: number) {
        this._code = value;
    }

    get producer(): string {
        return this._producer;
    }

    set producer(value: string) {
        this._producer = value;
    }

    get release(): number {
        return this._release;
    }

    set release(value: number) {
        this._release = value;
    }
}