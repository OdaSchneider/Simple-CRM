export class Client {

    company: string;
    contactFirstName: string;
    contactLastName: string;
    email: string;
    phone: number;
    website: string;
    companySize: string;
    clientType: string;
    street: string;
    zipCode: number;
    city: string;
    country: string;
    color: string;

    constructor(obj?: any){
        this.company = obj ? obj.company : '';
        this.contactFirstName = obj ? obj.contactFirstName : '';
        this.contactLastName = obj ? obj.contactLastName : '';
        this.email = obj ? obj.email : '';
        this.website = obj ? obj.website : '';
        this.companySize = obj ? obj.companySize : '';
        this.phone = obj ? obj.phone : '';
        this.clientType = obj ? obj.clientType : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.country = obj ? obj.country : '';
        this.color = obj ? obj.color : '';
    }


    public toJSON(){
        return{
            company: this.company,
            contactFirstName: this.contactFirstName,
            contactLastName: this.contactLastName,
            email: this.email,
            phone: this.phone,
            website: this.website,
            companySize: this.companySize,
            clientType: this.clientType,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            country: this.country,
            color: this.color
        };
    }
}