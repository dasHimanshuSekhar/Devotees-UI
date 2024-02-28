import { Component, OnInit } from '@angular/core';
import { Devotee } from '../../Devotee';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
    selector: 'app-devotees',
    standalone: true,
    templateUrl: './devotees.component.html',
    styleUrl: './devotees.component.css',
    imports: [CommonModule, TodoItemComponent]
})
export class DevoteesComponent implements OnInit {
  
  devotees: Devotee[];

  constructor(){
    this.devotees = [
      {
        userName: "dasHimanshu",
        fullName: "Himanshu Das",
        emailId: "dashimanshu@gmail.com"
      },
      {
        userName: "prabhuGopal",
        fullName: "Goapl Jiu",
        emailId: "jiugopal@gmail.com"
      },
      {
        userName: "jenaMahaprasad",
        fullName: "Mahaprasad Jena",
        emailId: "badjenaprasad@gmail.com"
      }
    ]
  }

  
  ngOnInit(): void {
  }

  devoteeDelete(devotee: Devotee){
    console.log(devotee);
    const index = this.devotees.indexOf(devotee);
    this.devotees.splice(index, 1);
  }

}
