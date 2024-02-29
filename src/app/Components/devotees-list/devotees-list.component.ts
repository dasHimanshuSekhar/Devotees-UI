import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Devotee } from '../devotees/Devotee';

@Component({
  selector: 'app-devotees-list',
  standalone: true,
  imports: [],
  templateUrl: './devotees-list.component.html',
  styleUrl: './devotees-list.component.css'
})
export class DevoteesListComponent {
  
  @Input()
  devotee: Devotee = new Devotee;
  
  @Output()
  devoteeDelete: EventEmitter<Devotee> = new EventEmitter;
  
  //delete a devotee from frontend
  onClickDelete(devotee: Devotee) {
    this.devoteeDelete.emit(devotee);
    console.log("Devotee onclick event triggered --");
    console.log(devotee);
  }
}
