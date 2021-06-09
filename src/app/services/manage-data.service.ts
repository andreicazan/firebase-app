import { Injectable } from '@angular/core';

interface Review {
  doctorID: string;
  doctorName: string;
  userID: string;
  userName: String;
  rating: string;
  message: string;

}

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  constructor() { }

  items: Review[] = [];

  addReview(review : Review){
    this.items.push(review);
  }

  getReview(){
    return this.items;
  }

  deleteReview(){
    this.items = [];
    return this.items;
  }
  
}
