class Instructor {
    name: string;
    role: string;

    constructor(name: string, role = "assistant") {
        this.name = name;
        this.role = role;
    }

    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }

    static helloWorld() {
        console.log("hello world");
    }
    static canTeach(Instructor: Instructor) {
        return (Instructor.role == "classroom");
    }
}

let i1 = new Instructor("minh anh");
let i2 = new Instructor("hi hi", "classroom");
i1.renderDetails();
i2.renderDetails();
Instructor.helloWorld();
console.log(`${i1.name} can teach: ${Instructor.canTeach(i1)}`);
console.log(`${i2.name} can teach: ${Instructor.canTeach(i2)}`);