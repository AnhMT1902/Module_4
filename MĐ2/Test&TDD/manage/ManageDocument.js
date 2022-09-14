"use strict";
exports.__esModule = true;
exports.ManageDocument = void 0;
var Book_1 = require("../model/Book");
var ManageBook_1 = require("./ManageBook");
var Magazine_1 = require("../model/Magazine");
var ManageMagazine_1 = require("./ManageMagazine");
var Newspaper_1 = require("../model/Newspaper");
var ManageNewspaper_1 = require("./ManageNewspaper");
var readlineSync = require('readline-sync');
var ManageDocument = /** @class */ (function () {
    function ManageDocument() {
    }
    ManageDocument.prototype.addProduct = function (t) {
        ManageDocument.listDocument.push(t);
        if (t instanceof Book_1.Book) {
            ManageBook_1.ManageBook.listBook.push(t);
        }
        if (t instanceof Magazine_1.Magazine) {
            ManageMagazine_1.ManageMagazine.listMagazine.push(t);
        }
        if (t instanceof Newspaper_1.Newspaper) {
            ManageNewspaper_1.ManageNewspaper.listNewspaper.push(t);
        }
    };
    ManageDocument.prototype.findProductByCode = function (code) {
        var flag = 0;
        var index = -1;
        for (var i = 0; i < ManageDocument.listDocument.length; i++) {
            if (ManageDocument.listDocument[i].code == code) {
                index = i;
                flag++;
            }
        }
        if (flag == 0) {
            console.log("deo co");
        }
        else {
            console.log(ManageDocument.listDocument[index]);
        }
        return index;
    };
    ManageDocument.prototype.removeProduct = function (code) {
        ManageDocument.listDocument = ManageDocument.listDocument.filter(function (item) { return item.code != code; });
        ManageBook_1.ManageBook.listBook = ManageBook_1.ManageBook.listBook.filter(function (item) { return item.code != code; });
        ManageNewspaper_1.ManageNewspaper.listNewspaper = ManageNewspaper_1.ManageNewspaper.listNewspaper.filter(function (item) { return item.code != code; });
        ManageMagazine_1.ManageMagazine.listMagazine = ManageMagazine_1.ManageMagazine.listMagazine.filter(function (item) { return item.code != code; });
    };
    ManageDocument.prototype.showAll = function () {
        console.log(ManageDocument.listDocument);
    };
    ManageDocument.listDocument = [];
    return ManageDocument;
}());
exports.ManageDocument = ManageDocument;
