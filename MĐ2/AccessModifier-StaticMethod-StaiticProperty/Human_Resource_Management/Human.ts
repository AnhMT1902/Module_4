export class Human {
    id: number
    firstname: string;
    lastname: string;
    birthday: string;
    address: string;
    role: number;

    constructor(id: number, firstname: string, lastname: string, birthday: string, address: string, role: number) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.address = address;
        this.role = role;
    }
}