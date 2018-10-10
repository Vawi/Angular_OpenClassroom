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
      content: 'Un premier coucou',
      loveIts: 2,
      created_at: Date
    },
    {
      title: 'Mon deuxieme post',
      content: 'Un second coucou',
      loveIts: 0,
      created_at: Date
    },
    {
      title: 'Encore un post',
      content: 'On oublie pas de mettre les trois points <3',
      loveIts: -1,
      created_at: Date
    }
  ];

}
