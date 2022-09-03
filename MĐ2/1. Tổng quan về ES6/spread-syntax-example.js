function sum(x, y, z) {
    return x + y + z;
}
const number = [1, 2, 3];
console.log(sum(...number));

let a = [1, 3];
let b = [4,6,8];
a.push(...b);
console.log(a);

a = [...b];
console.log(a);

let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {...obj1};
console.log(obj2);

let c = [...a, ...b];
console.log(c);
