var Phuongtrinhbacnhat = /** @class */ (function () {
    function Phuongtrinhbacnhat(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Phuongtrinhbacnhat.prototype, "info", {
        get: function () {
            return "".concat(this._a, "x + ").concat(this._b, " = 0");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phuongtrinhbacnhat.prototype, "nghiem", {
        get: function () {
            var x = 0;
            if (this._a != 0 && this._b != 0) {
                x = -this._b / this._a;
                return "x = ".concat(x);
            }
            else if (this._a == 0 && this._b == 0) {
                return "phuong trinh vo so nghiem";
            }
            else if (this._a == 0 && this._b != 0) {
                return "phuong trinh vo nghiem";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Phuongtrinhbacnhat;
}());
var firstEquation = new Phuongtrinhbacnhat(0, 0);
console.log(firstEquation.info);
console.log(firstEquation.nghiem);
