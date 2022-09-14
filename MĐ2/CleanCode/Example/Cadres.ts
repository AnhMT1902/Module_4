import {Gender} from "./Enum/Gender";

export class Cadres {
    private _id: number;
    private _name: string;
    private _age: number;
    private _gender: Gender;
    private _address: string;

    constructor(id: number, name: string, age: number, gender: Gender, address: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._address = address;
        this._id = id
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}