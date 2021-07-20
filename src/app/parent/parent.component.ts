import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  firstName: string;
  lastName: string;
  siblings: Array<string>;
  constructor() { }

  ngOnInit(): void {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
  }

}
