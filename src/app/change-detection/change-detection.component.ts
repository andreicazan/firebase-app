import { Component, OnInit } from '@angular/core';
import { ChangeDetectionService } from '../services/change-detection.service';

interface User{
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./style.sass']
})



export class ChangeDetectionComponent implements OnInit {

  user: User = {
    firstName: 'Mihai',
    lastName: 'Branzas'

  }

  
  

  constructor(private changeDetectionService: ChangeDetectionService) { }

  ngOnInit(): void {
  }

  subscribeToNewsletter(email: string){
    this.changeDetectionService.subscribe(email);
  }

  changeUserName(){
    this.user.firstName = 'Giani';
  }

}
