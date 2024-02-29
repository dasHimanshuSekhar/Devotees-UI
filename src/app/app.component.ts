import { Component, OnInit } from '@angular/core';
import { DevoteesComponent } from './Components/devotees/devotees.component';
import { RouterOutlet } from '@angular/router';
import { NewDevoteeComponent } from "./Components/new-devotee/new-devotee.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DevoteesComponent, NewDevoteeComponent, FormsModule]
})
export class AppComponent implements OnInit{
  title = 'devotee';
  /* 
  constructor(){
    setTimeout(()=>
    {
      this.title = 'non-devotee';
    }, 2000
    )
  }
  */
 ngOnInit(): void {
  //  throw new Error('Method not implemented.');
 }
}
