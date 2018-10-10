import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posts = [
    {
      title: 'Mon premier post',
      content: 'JDIJZIAJOQSJAINSA',
      loveIts: 2,
      created_at: Date
    },
    {
      title: 'Mon deuxieme post',
      content: 'JDIJZIAJOQSJAINSAJDOS£ajisnalindvz',
      loveIts: 0,
      created_at: Date
    },
    {
      title: 'Encore un post',
      content: 'JDIJZIAJOQSJAINSAOSAI£diajcajcdjnjijsdzjashfoahcpsjiapcsnpcnapeafn',
      loveIts: -1,
      created_at: Date
    }
  ];

}
