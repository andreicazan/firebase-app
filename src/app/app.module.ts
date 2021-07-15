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
import { ReviewComponent } from './review-list/review-list.component';
import { NgAisModule } from 'angular-instantsearch';
import { DatePipe } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ListReviewComponent } from './admin-area/reviews/list-review/list-review.component';
import { EditReviewComponent } from './admin-area/reviews/edit-review/edit-review.component';
import { CreateReviewComponent } from './admin-area/reviews/create-review/create-review.component';
import { CreateUserComponent } from './admin-area/user/create-user/create-user.component';
import { ListUserComponent } from './admin-area/user/list-user/list-user.component';
import { EditUserComponent } from './admin-area/user/edit-user/edit-user.component';
import { ListDoctorComponent } from './admin-area/doctor/list-doctor/list-doctor.component';
import { EditDoctorComponent } from './admin-area/doctor/edit-doctor/edit-doctor.component';
import { CreateDoctorComponent } from './admin-area/doctor/create-doctor/create-doctor.component';
import { StreamDataComponent } from './stream-data/stream-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailLoginComponent,
    SignupComponent,
    SearchComponent,
    FilterPipe,
    ReviewComponent,
    AdminPanelComponent,
    ListReviewComponent,
    EditReviewComponent,
    CreateReviewComponent,
    CreateUserComponent,
    ListUserComponent,
    EditUserComponent,
    ListDoctorComponent,
    EditDoctorComponent,
    CreateDoctorComponent,
    StreamDataComponent
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
    NgxChartsModule,
    BrowserAnimationsModule
   
    
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
