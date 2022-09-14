"use strict";
exports.__esModule = true;
exports.ManageBook = void 0;
var ManageDocument_1 = require("./ManageDocument");
var ManageBook = /** @class */ (function () {
    function ManageBook() {
    }
    ManageBook.prototype.addProduct = function (t) {
        ManageBook.listBook.push(t);
        ManageDocument_1.ManageDocument.listDocument.push(t);
    };
    ManageBook.prototype.findProductByCode = function () {
    };
    ManageBook.prototype.removeProduct = function (code) {
    };
    ManageBook.prototype.showAll = function () {
        console.log(ManageBook.listBook);
    };
    ManageBook.listBook = [];
    return ManageBook;
}());
exports.ManageBook = ManageBook;
