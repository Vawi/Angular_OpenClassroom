import { Component } from '@angular/core';
import { Post } from "src/app/models/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] =[
    new Post('Mon premier post', 'Un premier coucou', 1),
    new Post('Mon deuxieme post', 'Un second coucou', -1),
    new Post('Encore un post', 'On oublie pas de mettre les trois points <3', 8)
];

}
