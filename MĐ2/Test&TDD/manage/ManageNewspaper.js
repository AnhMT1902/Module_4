"use strict";
exports.__esModule = true;
exports.ManageNewspaper = void 0;
var ManageDocument_1 = require("./ManageDocument");
var ManageNewspaper = /** @class */ (function () {
    function ManageNewspaper() {
    }
    ManageNewspaper.prototype.addProduct = function (t) {
        ManageNewspaper.listNewspaper.push(t);
        ManageDocument_1.ManageDocument.listDocument.push(t);
    };
    ManageNewspaper.prototype.findProductByCode = function () {
    };
    ManageNewspaper.prototype.removeProduct = function (code) {
    };
    ManageNewspaper.prototype.showAll = function () {
        console.log(ManageNewspaper.listNewspaper);
    };
    ManageNewspaper.listNewspaper = [];
    return ManageNewspaper;
}());
exports.ManageNewspaper = ManageNewspaper;
