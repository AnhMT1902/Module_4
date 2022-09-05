class diem {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    displayName = "point";
    distance(b) {
        let dx = this.x - b.x;
        let dy = this.y - b.y;
        return Math.hypot(dx, dy);
    }
}

let p1 = new diem(3,4);
let p2 = new diem(5,5);
p1,p2.displayName;
console.log(p1.distance(p2));