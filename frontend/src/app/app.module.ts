import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostService } from './post/post.service';
import { PostListComponent } from './post/post-list/post-list.component';
import { UsersComponent } from './user/users/users.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './user/user.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { AddPostComponent } from './post/add-post/add-post.component';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';

import { Configuration } from './app.constants';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.moudule';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './comment/comment.service';
import { AddCommentComponent } from './post/post-detail/add-comment/add-comment.component';

// import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material/';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
          tokenName: 'id_token',
          tokenGetter: (() => localStorage.getItem('id_token')),
          globalHeaders: [{'Content-Type': 'application/json'}],
          headerPrefix: 'JWT',
     }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent,
    UsersComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AddPostComponent,
    HomeComponent,
    CommentComponent,
    AddCommentComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
       ],
  providers: [PostService,
   UserService,
   CommentService,
   Configuration,
   AuthService,
   AuthGuardService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
