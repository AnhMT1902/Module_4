"use strict";
exports.__esModule = true;
exports.ManageMagazine = void 0;
var ManageDocument_1 = require("./ManageDocument");
var ManageMagazine = /** @class */ (function () {
    function ManageMagazine() {
    }
    ManageMagazine.prototype.addProduct = function (t) {
        ManageMagazine.listMagazine.push(t);
        ManageDocument_1.ManageDocument.listDocument.push(t);
    };
    ManageMagazine.prototype.findProductByCode = function () {
    };
    ManageMagazine.prototype.removeProduct = function (code) {
    };
    ManageMagazine.prototype.showAll = function () {
        console.log(ManageMagazine.listMagazine);
    };
    ManageMagazine.listMagazine = [];
    return ManageMagazine;
}());
exports.ManageMagazine = ManageMagazine;
