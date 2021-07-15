import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

export interface Item{ 
  id: string,
  name : string,
  price ?: string}

@Component({
  selector: 'app-stream-data',
  templateUrl: './stream-data.component.html',
  styleUrls: ['./stream-data.component.css'],
  
})
export class StreamDataComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  help: any;
  isSpecial:any;
  
  name  : any;
  customerName = 'Andrei';

  isDisabled = false;
  
  val : any = 'Something';

  constructor(private db: AngularFirestore) { 
    this.itemsCollection = db.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem(item: Item){
    this.itemsCollection.add(item);
  }

  addItemByName(name : string){
    const id = this.db.createId();
    const item: Item= { id, name};
    this.itemsCollection.add(item);
  }

  

  ngOnInit(): void {
    
    console.log(this.itemsCollection)
    
  }

  updateName(){
    
    this.customerName = "Mihai";
  }

  

}
