let arr = [2,4,1,5,6,2];
let square = (item) => item * item;
function arraySq(func, arr) {
    let newArray = [];
    arr.forEach((element) => {
        newArray.push(func(element));
    })
    return newArray;
}
console.log(arraySq(square, arr));
