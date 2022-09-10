import {Product} from "./product";

export class ProductManager {
    private product: Product[] = [];
    constructor() {
    }

    get setAll() {
        console.log(this.product);
        return 1;
    }

    set addProduct(Product: Product) {
        this.product.push(Product);
    }
}
