import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-drawer',
  templateUrl: './parent-drawer.component.html',
  styleUrls: ['./parent-drawer.component.css']
})
export class ParentDrawerComponent implements OnInit {

  isDrawerOpen :any;
  constructor() { }

  ngOnInit(): void {
  }

}
