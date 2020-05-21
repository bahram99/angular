import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormsModule, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  @Output() addtask = new EventEmitter()
  @Input() lastid:number;
  constructor(private build:FormBuilder) {
  }
  name = new FormControl('' ,[Validators.required,Validators.minLength(3)])
  description = new FormControl('',[Validators.required,Validators.minLength(5)])
  id = new FormControl('')

  createtask:FormGroup = this.build.group({
    id:this.id,
    name:this.name,
    description:this.description,
    complete:false
  })


  create(){
    this.id.setValue(this.lastid)
    this.addtask.emit(this.createtask.value);
    console.log(this.createtask.value)
    this.createtask.reset()
  }
}
