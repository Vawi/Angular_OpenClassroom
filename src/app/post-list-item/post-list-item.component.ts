import { Component, Input, OnInit } from '@angular/core';
import { Post } from "src/app/models/post";
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onLoveIt(){
    this.post.loveIts++;
  }

  onHateIt(){
    this.post.loveIts--;
  }

  
}
