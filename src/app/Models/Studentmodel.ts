export class StudentModel{
    Id : Number=0;
    StudentId:Number=0;
    StudentName:string;
    CourseEnrolled : string;
    constructor(id:Number,studentId:Number,studentName:string,CourseEnrollement:string)
    {
        this.Id=id;
        this.StudentId=studentId;
        this.StudentName=studentName;
        this.CourseEnrolled=CourseEnrollement
    }
}