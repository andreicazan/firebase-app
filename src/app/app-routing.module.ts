import { ReviewComponent } from './review-list/review-list.component';
import { ProductListComponent } from './basics-angular/product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmailLoginComponent } from './email-login/email-login.component';
import { ArticlesComponent } from './basics-angular/articles/articles.component';
import { ArticleComponent } from './basics-angular/article/article.component';




const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },

  { path: 'email-login', component: EmailLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'review/:id', component: ReviewComponent },

  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})
export class AppRoutingModule { }
