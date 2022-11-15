export class Task {

    title: string;
    description: string;
    prio: string;
    category: string;
    dueDate: number;
    contacts: any;
    currentStatus: string

    constructor(obj?: any){
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';
        this.prio = obj ? obj.prio : '';
        this.category = obj ? obj.category : '';
        this.dueDate = obj ? obj.dueDate : '';
        this.contacts = obj ? obj.contacts : '';
        this.currentStatus = obj ? obj.currentStatus : '';
    }


    public toJSON(){
        return{
            title: this.title,
            description: this.description,
            prio: this.prio,
            category: this.category,
            dueDate: this.dueDate,
            contacts: this.contacts,
            currentStatus: this.currentStatus
        };
    }
}