export class UserModel{
    Username:string;
    Password:string;
    RoleId:number;

    constructor(username:string,password:string,roleId:number){
       this.Username=username;
       this.Password=password;
       this.RoleId=roleId;
    }
}