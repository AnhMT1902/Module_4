export interface InterfaceManage<T> {
    showAll();
    addProduct(t: T);
    removeProduct(code: number);
    findProductByCode(code: number);
}