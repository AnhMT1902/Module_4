import {Product} from "./product";
import {ProductManager} from "./ProductManager";

let iphone = new Product("Iphone 12 Pro Max", 20000000 );
let samsung = new Product("Samsung Galaxy S22 Ultra", 15000000);
let productManager = new ProductManager();
productManager.addProduct = iphone;
productManager.addProduct = samsung;
console.log(productManager.setAll);
