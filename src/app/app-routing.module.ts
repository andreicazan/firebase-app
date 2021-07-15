import { ListReviewComponent } from './admin-area/reviews/list-review/list-review.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ReviewComponent } from './review-list/review-list.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmailLoginComponent } from './email-login/email-login.component';
import { EditReviewComponent } from './admin-area/reviews/edit-review/edit-review.component';
import { CreateReviewComponent } from './admin-area/reviews/create-review/create-review.component';
import { ListUserComponent } from './admin-area/user/list-user/list-user.component';
import { EditUserComponent } from './admin-area/user/edit-user/edit-user.component';
import { CreateUserComponent } from './admin-area/user/create-user/create-user.component';
import { ListDoctorComponent } from './admin-area/doctor/list-doctor/list-doctor.component';
import { EditDoctorComponent } from './admin-area/doctor/edit-doctor/edit-doctor.component';
import { CreateDoctorComponent } from './admin-area/doctor/create-doctor/create-doctor.component';
import { StreamDataComponent } from './stream-data/stream-data.component';


const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },

  { path: 'email-login', component: EmailLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchComponent },
  { path: 'review/:id', component: ReviewComponent },
  { path: 'admin', component: AdminPanelComponent },
  
  { path: 'list-review', component: ListReviewComponent },
  { path: 'edit-review/:id', component: EditReviewComponent },
  { path: 'create-review', component: CreateReviewComponent },
  
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'create-user', component: CreateUserComponent },

  { path: 'list-doctor', component: ListDoctorComponent },
  { path: 'edit-doctor/:id', component: EditDoctorComponent },
  { path: 'create-doctor', component: CreateDoctorComponent },
  
  { path: 'data', component: StreamDataComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})
export class AppRoutingModule { }
