"use strict";
exports.__esModule = true;
exports.Document = void 0;
var Id_1 = require("../const/Id");
var Document = /** @class */ (function () {
    function Document(code, producer, release) {
        this._code = 0;
        this._code = Document.randomId();
        this._producer = producer;
        this._release = release;
    }
    Document.randomId = function () {
        var newId = +Document.temp;
        if (Id_1.Id.id.indexOf(newId) == -1 || Id_1.Id.id == []) {
            Id_1.Id.id.push(newId);
            return newId;
        }
        else
            this.randomId();
    };
    Object.defineProperty(Document.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "producer", {
        get: function () {
            return this._producer;
        },
        set: function (value) {
            this._producer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "release", {
        get: function () {
            return this._release;
        },
        set: function (value) {
            this._release = value;
        },
        enumerable: false,
        configurable: true
    });
    Document.temp = Math.floor(Math.random() * 100);
    return Document;
}());
exports.Document = Document;
