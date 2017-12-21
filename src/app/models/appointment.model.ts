export class Appointment {
    _id: string;
    date: Date;
    startTime: string;
    customer: string;
    location: string;
    counselor: string;

    constructor() {
        this.date = new Date();
        this.startTime = '';
        this.customer = '';
        this.location = '';
        this.counselor = '';
    }
}
