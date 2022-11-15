export class Contact {

    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    birthDate: number;
    department: string;
    street: string;
    zipCode: number;
    city: string;
    country: string;
    color: string;

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.phone = obj ? obj.phone : '';
        this.department = obj ? obj.department : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.country = obj ? obj.country : '';
        this.color = obj ? obj.color : '';
    }


    public toJSON(){
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            department: this.department,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            country: this.country,
            color: this.color
        };
    }
}