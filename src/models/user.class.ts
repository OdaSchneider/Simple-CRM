export class User {
    uid: string;
    email: string;
    password: string;
    displayName: string;
    photoURL: string;


    constructor(obj?: any){
        this.uid = obj ? obj.uid : '';
        this.email = obj ? obj.email : '';
        this.password = obj ? obj.password : '';
        this.displayName = obj ? obj.displayName: '';
        this.photoURL = obj ? obj.photoURL : '';
    }


    public toJSON(){
        return{
            uid: this.uid,
            email: this.email,
            password: this.password,
            displayName: this.displayName,
            photoURL: this.photoURL,
        };
    }
}