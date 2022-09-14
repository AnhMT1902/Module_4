export interface Manager<T> {
    addProduct(t: T);

    removeProduct(id: number);

    findProductByName(name: string);

    editProductById(id: number);

    showAll();
}