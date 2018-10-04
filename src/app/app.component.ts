import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
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
