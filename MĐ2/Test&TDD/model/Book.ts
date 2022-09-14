import {Document} from "./Document";

export class Book extends Document {
    private _author: string;
    private _Page: number;


    constructor(code: number, producer: string, release: number, author: string, Page: number) {
        super(code, producer, release);
        this._author = author;
        this._Page = Page;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get Page(): number {
        return this._Page;
    }

    set Page(value: number) {
        this._Page = value;
    }
}