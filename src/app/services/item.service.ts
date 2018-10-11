import { Post } from "src/app/models/post";
import { Subject } from "rxjs";

export class ItemService { 

    postsSubject = new Subject<any[]>();

    posts: Post[] =[
        new Post('Mon premier post', 'Un premier coucou', 1),
        new Post('Mon deuxieme post', 'Un second coucou', -1),
        new Post('Encore un post', 'On oublie pas de mettre les trois points <3', 8)
    ];

    addItem(title: string, content: string) {
        const PostObject = {
          title: '',
          content: '',
          loveIts:0,
          created_at: new Date
        };
        PostObject.title = title;
        PostObject.content = content;
        this.posts.push(PostObject);
        this.emitPostSubject();
    }

    emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

}