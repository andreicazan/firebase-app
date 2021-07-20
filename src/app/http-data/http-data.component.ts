import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface SearchResult {
  total: number;
  results: Array<object>;
}

interface ArticlePost {
  id: string;
  title: string;
}

@Component({
  selector: 'app-http-data',
  templateUrl: './http-data.component.html',
  styleUrls: ['./http-data.component.css']
})


export class HttpDataComponent implements OnInit {
  totalAngularPackages: any;
  errorMessage: any;
  postID: any;
  objID: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

   

    this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(
      data => {this.objID = data.id;
      });



}



}