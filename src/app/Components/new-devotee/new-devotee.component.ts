import { Component, EventEmitter, Output } from '@angular/core';
import { Devotee } from '../devotees/Devotee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-devotee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-devotee.component.html',
  styleUrl: './new-devotee.component.css'
})

export class NewDevoteeComponent {
[x: string]: any;
  @Output()
  addDevotee: EventEmitter<Devotee> = new EventEmitter;
  public devotee: Devotee = new Devotee;
  


  //add a new devotee from fromtend
  onClickAdd(devotee: Devotee){
    this.addDevotee.emit(devotee);
    console.log("Devotee onclick even triggered ++");
    console.log(devotee);
    localStorage.setItem(JSON.stringify(devotee.userName), JSON.stringify(devotee));
  }

  reloadPage() {
    window.location.reload();
  }
  
}
