
export class Employee {
id: number;
operation: string;
firstName: string;
lastName: string;
emailId: string;
active: boolean;
constructor(){
this.id=0;
this.operation="";
this.firstName="";
this.lastName="";
this.emailId="";
this.active=true;
}
/* constructor(x: string,y:string,z:string,a:string,c:boolean,f:number){
    this.id=f;
    this.operation=x;
    this.firstName=y;
    this.lastName=z;
    this.emailId=a;
    this.active=c;
    } */
setOperation(op:string ):void{
this.operation = op;
}
getName():String{
return this.firstName;
}
setIdEmployee (i:number):void{
this.id = i;
}
}