import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Devotee } from '../../Devotee';
import { DevoteesComponent } from '../devotees/devotees.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{


  
  @Input()
  devotee: Devotee = new Devotee;

  @Output() devoteeDelete: EventEmitter<Devotee> = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  onClick(devotee: Devotee) {
    this.devoteeDelete.emit(devotee);
    console.log("on-clicked trigerred !!");
  }
}
