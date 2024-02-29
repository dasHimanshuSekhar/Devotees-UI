import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevoteesListComponent } from "../devotees-list/devotees-list.component";
import { Devotee } from './Devotee';
import { error } from 'console';

@Component({
    selector: 'app-devotees',
    standalone: true,
    templateUrl: './devotees.component.html',
    styleUrl: './devotees.component.css',
    imports: [CommonModule, DevoteesListComponent]
})
export class DevoteesComponent implements OnInit {
  
  public test: String = 'Variable testing @html';
  devotees: Devotee[] = [];
  
  constructor(){
    // this.devotees = [
    //   {
    //     userName: "dasHimanshu",
    //     fullName: "Himanshu Das",
    //     emailId: "dashimanshu@gmail.com"
    //   },
    //   {
    //     userName: "prabhuGopal",
    //     fullName: "Goapl Jiu",
    //     emailId: "jiugopal@gmail.com"
    //   },
    //   {
    //     userName: "jenaMahaprasad",
    //     fullName: "Mahaprasad Jena",
    //     emailId: "badjenaprasad@gmail.com"
    //   }
    // ]

    this.loadDevoteesFromLocalStorage();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  loadDevoteesFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const keys = Object.keys(localStorage);
      console.log("localStorage length: " + localStorage.length);
      keys.forEach(key => {
        const devotee = localStorage.getItem(key);
        if(devotee == null){
          throw new Error("localStorage data not found !");
        }
        console.log("localStorageValue: " + devotee);        
        this.devotees.push(JSON.parse(devotee));
      });
    }
  }

  updateLocalStorageFromDevotees(){
    if(typeof localStorage !== 'undefined'){
      
    }
  }

  //delete a devotee object
  devoteeDelete(devotee: Devotee) {
    // Remove the item from localStorage
    localStorage.removeItem(JSON.stringify(devotee.userName));
    // Find the index of the devotee in this.devotees array
    const index = this.devotees.findIndex(d => JSON.stringify(d) === JSON.stringify(devotee));
    // If the devotee is found, remove it from this.devotees array
    if (index !== -1) {
      this.devotees.splice(index, 1);
    } else {
      console.error('Devotee not found in this.devotees array.');
    }
  
    console.log("inside devotee delete function --");
    console.log(this.devotees);
    console.log("localStorage length @deleteDevoteeMethod: " + localStorage.length);
  }
}

  
