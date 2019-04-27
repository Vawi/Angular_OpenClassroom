import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ItemService } from './services/item.service';

const appRoutes: Routes = [
  { path: 'item', component: PostListComponent },
  { path: '', component: PostListComponent },
  { path: 'edit', component: NewPostComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    FourOhFourComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
