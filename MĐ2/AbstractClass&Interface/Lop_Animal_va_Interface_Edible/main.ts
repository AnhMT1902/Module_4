import {Animal} from "./Animal";
import {Chicken} from "./Chicken";
import {Tiger} from "./Tiger";
import {Orange} from "./Orange";
import {Apple} from "./Apple";

let animal: Animal[] = [];
animal[1] = new Chicken();
animal[0] = new Tiger();
console.log("----animal----")
animal.forEach((item) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howtoEat());
    }
})
console.log("----fruit----");
let fruit = [];
fruit[0] = new Orange();
fruit[1] = new Apple();
fruit.forEach((item) => {
    console.log(item.howtoEat())
});
