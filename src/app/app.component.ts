import { Component } from '@angular/core';
import { DevoteesComponent } from './devotees/devotees.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DevoteesComponent]
})
export class AppComponent {
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
}
