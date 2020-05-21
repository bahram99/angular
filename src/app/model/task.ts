export class Task {
  id:number;
  name : string;
  description : string;
  complete : boolean;

  constructor(id : number , name : string , description : string , complete : boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.complete = complete;
  }
}
