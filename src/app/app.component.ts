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
      loveIts: '2'
    },
    {
      title: 'Mon deuxieme post',
      content: 'JDIJZIAJOQSJAINSAJDOS£ajisnalindvz',
      loveIts: '0'
    },
    {
      title: 'Encore un post',
      content: 'JDIJZIAJOQSJAINSAOSAI£diajcajcdjnjijsdzjashfoahcpsjiapcsnpcnapeafn',
      loveIts: '5'
    }
  ];

}
