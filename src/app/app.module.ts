import { FilterPipe } from './filter.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFirestoreModule} from '@angular/fire/firestore'

import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { EmailLoginComponent } from './email-login/email-login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './basics-angular/product-list/product-list.component';
import { TopBarComponent } from './basics-angular/top-bar/top-bar.component';
import { ArticlesComponent } from './basics-angular/articles/articles.component';
import { ArticleComponent } from './basics-angular/article/article.component';
import { DetailAnimalComponent } from './basics-angular/detail-animal/detail-animal.component';
import { ReviewComponent } from './review-list/review-list.component';
import { NgAisModule } from 'angular-instantsearch';



@NgModule({
  declarations: [
    AppComponent,
    EmailLoginComponent,
    SignupComponent,
    SearchComponent,
    FilterPipe,
    ProductListComponent,
    TopBarComponent,
    ArticlesComponent,
    ArticleComponent,
    DetailAnimalComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgbModule,
    NgAisModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
