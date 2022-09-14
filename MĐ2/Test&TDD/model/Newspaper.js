"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Newspaper = void 0;
var Document_1 = require("./Document");
var Newspaper = /** @class */ (function (_super) {
    __extends(Newspaper, _super);
    function Newspaper(code, producer, release, day) {
        var _this = _super.call(this, code, producer, release) || this;
        _this._day = day;
        return _this;
    }
    Object.defineProperty(Newspaper.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (value) {
            this._day = value;
        },
        enumerable: false,
        configurable: true
    });
    return Newspaper;
}(Document_1.Document));
exports.Newspaper = Newspaper;
