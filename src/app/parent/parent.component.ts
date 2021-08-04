import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name: string;
  password: string;
  siblings: Array<string>;
  constructor() { }

  ngOnInit(): void {
    this.name = 'John';
    this.password = 'Doe';
    this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
  }

}
