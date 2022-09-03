// Example 1: Here we have copied the array
// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = [...cars1];
// const cars3 = [...cars1,"NISSAN","TOYOTA"];
//
// console.log(cars1);
// console.log(cars2);
// console.log(cars3);

//ex 2:
// const cars1 = ["BMW", "AUDI" , "TADA", "MERCEDES"];
// const cars2 = ["NISSAN", "TOYOTA"];
// const cars3 = [...cars1, ...cars2 ];
// console.log(cars3);

//ex 3:
//  const cars1 = {
//      Brand : "BMW",
//      Color : "red"
//  }
//  const cars2 = {...cars1};
// console.log(cars2);

//ex 4:
// const cars1 = {
//     Brand: "TOYOTA",
//     Color: "red",
// }
// const cars2 = {
//     Brand: "NISSAN",
//     Color: "blue",
//     Year: 2004
// }
// const cars3 = {...cars1, ...cars2};
// console.log(cars3);

//ex 5:
const car = "AUDI";
const a = {...car};
console.log(a);

// ex6:
const number = [1,3,5,7,9];
const [a,b,c, ...others] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(others);