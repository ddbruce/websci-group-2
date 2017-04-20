// User class definition, derived from Mongo backend schema

export class User {
    id: number;
    firstName: string;
    lastName: string;
    company: string;
    username: string;
    password: string;

    constructor(user:string, pass:string){
        this.username = user;
        this.password = pass;
        this.firstName = "None";
        this.lastName = "None";
        this.company = "None";
    }
}