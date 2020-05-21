import {Component, Input} from '@angular/core';
import { Task } from './model/task';
import  { Task2 , Item } from './model/task2';
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Task[] = [
    new Task(1, 'task 12', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem consequuntur ea exercitationem fuga', false),
    new Task(4, 'task 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem consequuntur ea exercitationem fuga', true),
    new Task(3, 'task 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem consequuntur ea exercitationem fuga', false),
  ];
  task2: Task2[] = [
    new Task2(1, 'ali'),
    new Task2(2, 'akbar')];
  //=========================================================
  lasttaskid:number = this.tasks[this.tasks.length -1].id;

  ternon: boolean = true;
  fontsize: number;

  constructor() {
    setTimeout(() => {
      this.ternon = false;
    }, 3000)
    this.fontsize = 10;
  }

  @Input() items: Item[]
  num: number[] = [1, 2, 3, 4];

  completeapp: boolean = false;
  keyword: string = '';

  done(task) {
    task.complete = true;
  }
  remove(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1)
    console.log(task)
    console.log(this.tasks)
  }
  taskedit(task:Task){
    console.log(task)
  }

  //res:any  = document.getElementById("1").getAttribute('value')
  btn: boolean = false
  showtitle: string = 'welcome!!';

  buttontitle() {
    console.log('salam btn danger')
  }

  result: string;
  inputresulr: string = '';

  currentItem={
    name:'akbar'
  }
  color:string='red';

  ngDoCheck(){
    console.log('ngDoCheck Called!')
  }
  ngOnInit() {
    console.log('ngOnInit Called!')
  }
}









