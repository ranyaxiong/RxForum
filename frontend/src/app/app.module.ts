import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AlertModule} from 'ng2-bootstrap/';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostService } from './post/post.service';
import { PostListComponent } from './post/post-list/post-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/post-list', pathMatch: 'full' },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-detail/:id', component: PostDetailComponent },

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
