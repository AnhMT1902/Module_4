export interface Manage<T> {
    showAll();
    addProduct(t: T);
    removeProduct(code: number);
    findProductByType();
}