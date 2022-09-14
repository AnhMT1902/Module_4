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
exports.Book = void 0;
var Document_1 = require("./Document");
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(code, producer, release, author, Page) {
        var _this = _super.call(this, code, producer, release) || this;
        _this._author = author;
        _this._Page = Page;
        return _this;
    }
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "Page", {
        get: function () {
            return this._Page;
        },
        set: function (value) {
            this._Page = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}(Document_1.Document));
exports.Book = Book;
