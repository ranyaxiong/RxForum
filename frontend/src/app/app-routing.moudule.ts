import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostListComponent } from './post/post-list/post-list.component';

import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AddPostComponent } from './post/add-post/add-post.component';

import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
//  { path: 'post-list', component: PostListComponent, outlet: 'postList' },
  { path: 'post-list', component: PostListComponent, outlet: 'postList' },
  { path: 'post-detail/:id', component: PostDetailComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'add-post', component: AddPostComponent, canActivate: [AuthGuardService]},

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
