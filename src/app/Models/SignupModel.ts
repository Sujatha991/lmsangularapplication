export class SignupModel{
    Username : Number;
    Password:string;
    RoleId:Number;
    constructor(username:number,password:string,roleId:Number)
    {
        this.Username=username;
        this.Password=password;
        this.RoleId=roleId;
    }
}