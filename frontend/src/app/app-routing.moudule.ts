import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostService } from './post/post.service';
import { PostListComponent } from './post/post-list/post-list.component';
import { UsersComponent } from './user/users/users.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { AddPostComponent } from './post/add-post/add-post.component';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';

import { Configuration } from './app.constants';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
 // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
//  { path: 'post-list', component: PostListComponent, outlet: 'postList' },
  { path: 'post-list', component: PostListComponent, outlet: 'postList' },
  { path: 'post-detail/:id', component: PostDetailComponent },
  { path: 'register', component: UserRegisterComponent, outlet: 'postList' },
  { path: 'login', component: UserLoginComponent },
  { path: 'add-post', component: AddPostComponent },

];

@NgModule( {
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {}
