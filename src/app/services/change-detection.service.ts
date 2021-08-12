import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionService {
  
  subscribe(email: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
