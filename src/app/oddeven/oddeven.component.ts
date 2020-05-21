import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oddeven',
  templateUrl: './oddeven.component.html',
  styleUrls: ['./oddeven.component.css']
})
export class OddevenComponent implements OnInit {

  constructor() { }

  even:number[] =[2,4,6,8,10];
  odd:number[] = [1,3,5,7,9];

  result:boolean = false;

  ngOnInit(): void {
  }

}
