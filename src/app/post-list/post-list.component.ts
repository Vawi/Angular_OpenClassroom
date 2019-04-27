import { Component, Input, OnInit } from '@angular/core';
import { Post } from "src/app/models/post";
import { ItemService } from '../services/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  posts: Post[];
  postsSubscription : Subscription;

  constructor(private itemService: ItemService) {
    this.postsSubscription = this.itemService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.itemService.emitPostSubject()
   }

  ngOnInit() {
  }

}
