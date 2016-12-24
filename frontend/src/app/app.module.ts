import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostService } from './post/post.service';
import { PostListComponent } from './post/post-list/post-list.component';
import { UsersComponent } from './user/users/users.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './user/user.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AddPostComponent } from './post/add-post/add-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/post-list', pathMatch: 'full' },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-detail/:id', component: PostDetailComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'add-post', component: AddPostComponent },

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent,
    UsersComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
