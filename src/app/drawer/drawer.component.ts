import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  @Input() isOpen = true;
  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.isOpen = false;
    //this.closed.emit();
  }

  open(){
    this.isOpen = true;
  }
}
