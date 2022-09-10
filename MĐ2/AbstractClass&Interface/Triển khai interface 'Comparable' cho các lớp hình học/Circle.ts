export class Circle {
    private _radius: number;
    constructor(_radius: number) {
    this._radius = _radius;
    }


    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    toString() {
        return `A Circle with radius= ${this.radius}`;
    }
}