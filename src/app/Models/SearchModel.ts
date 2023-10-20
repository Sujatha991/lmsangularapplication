export class SearchModel{
    FirstName:String;
    LastName:string;
    LoanNumber:string;

    constructor(firstname:string,lastname:string,loannumber:string){

        this.FirstName=firstname;
        this.LastName=lastname;
        this.LoanNumber=loannumber;
    }
}