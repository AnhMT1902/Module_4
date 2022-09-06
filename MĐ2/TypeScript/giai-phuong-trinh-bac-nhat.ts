class Phuongtrinhbacnhat {
    private _a: number;
    private _b: number;

    constructor(a: number, b: number) {
        this._a = a;
        this._b = b;
    }

    get info(): string {
        return `${this._a}x + ${this._b} = 0`;
    }

    get nghiem(): string {
        let x = 0;
        if (this._a != 0) {
            x = -this._b / this._a;
            return `x = ${x}`;
        }if (this._a == 0) {
            if (this._b == 0) {
                return `phuong trinh vo so nghiem`
            }
            else {
                return `phuong trinh vo nghiem`
            }
        }
    }
}
let firstEquation = new Phuongtrinhbacnhat(0,0);
console.log(firstEquation.info);
console.log(firstEquation.nghiem);