import { Component, Input, OnInit } from '@angular/core';
import { Post } from "src/app/models/post";
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  @Input() posts: Post[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
