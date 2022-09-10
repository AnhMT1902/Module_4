import {Comparable} from "./Comparable";
import {Circle} from "./Circle";

export class ComparableCircle extends Circle implements Comparable {
    constructor(radius: number) {
        super(radius);
    }

    CompareTo(o: Circle): number {
        if (this.radius > o.radius) return 1;
        if (this.radius < o.radius) return -1;
        else return 0;
    }

}