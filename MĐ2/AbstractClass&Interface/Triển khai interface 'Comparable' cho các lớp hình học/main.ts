import {Circle} from "./Circle";
import {ComparableCircle} from "./ComparableCircle";

let circles: ComparableCircle[] = []
circles[0] = new ComparableCircle(5);
circles[1] = new ComparableCircle(6);
circles[2] = new ComparableCircle(5);
let resul = circles[0].CompareTo(circles[1]);
console.log(resul)