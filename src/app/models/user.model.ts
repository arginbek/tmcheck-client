export class User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    role: string;

    constructor() {
        this.firstname = 'first-name';
        this.lastname = 'last-name';
        this.email = 'email';
        this.username = 'user-name';
        this.role = 'staff';
    }
}
