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
exports.Magazine = void 0;
var Document_1 = require("./Document");
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(code, producer, release, issue, month) {
        var _this = _super.call(this, code, producer, release) || this;
        _this._issue = issue;
        _this._month = month;
        return _this;
    }
    Object.defineProperty(Magazine.prototype, "issue", {
        get: function () {
            return this._issue;
        },
        set: function (value) {
            this._issue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Magazine.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            this._month = value;
        },
        enumerable: false,
        configurable: true
    });
    return Magazine;
}(Document_1.Document));
exports.Magazine = Magazine;
