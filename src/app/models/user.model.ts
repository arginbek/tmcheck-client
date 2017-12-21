export class User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    role: string;
    password: string;

    constructor() {
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.username = '';
        this.role = '';
        this.password = '';
    }
}
