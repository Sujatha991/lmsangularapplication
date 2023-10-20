export class CourseModel{
    CourseId : Number;
    CourseName:string;
    Tag:String;
    Category:string;
    SubCategory : string;
    constructor(courseid:number,coursename:string,tag:string,category:string,subcategory:string)
    {
        this.CourseId=courseid;
        this.CourseName=coursename;
        this.Tag=tag;
        this.Category=category;
        this.SubCategory=subcategory
    }
}