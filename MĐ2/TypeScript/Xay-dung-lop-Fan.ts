enum Speed {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3,
}

class Fan {
    constructor(
        private _speed: number = Speed.SLOW,
        private _radius: number = 5,
        private _color: string = "blue",
    private _on: boolean = false,
    ) {
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    toString(): string {
        if (this._on) {
            return `fan is on`;
        }
        return `fan is off`;
    }
}

let fan1 = new Fan();
let fan2 = new Fan( Speed.FAST, 10,"yellow",true);
let fan3 = new Fan(Speed.MEDIUM, 5,"blue", false)
fan2.speed = Speed.MEDIUM;

console.log(fan1.toString());
console.log(fan2.toString());
console.log(fan3.toString());