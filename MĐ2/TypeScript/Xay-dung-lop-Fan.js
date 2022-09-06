var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(_speed, _radius, _color, _on) {
        if (_speed === void 0) { _speed = Speed.SLOW; }
        if (_radius === void 0) { _radius = 5; }
        if (_color === void 0) { _color = "blue"; }
        if (_on === void 0) { _on = false; }
        this._speed = _speed;
        this._radius = _radius;
        this._color = _color;
        this._on = _on;
    }
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        if (this._on) {
            return "fan is on";
        }
        return "fan is off";
    };
    return Fan;
}());
var fan1 = new Fan();
var fan2 = new Fan(Speed.FAST, 10, "yellow", true);
var fan3 = new Fan(Speed.MEDIUM, 5, "blue", false);
fan2.speed = Speed.MEDIUM;
console.log(fan1.toString());
console.log(fan2.toString());
console.log(fan3.toString());
