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
        const PostObject = new Post(title, content, 0); // Création d'un nouveau post avec les valeurs du formulaire passées en paramètre
        this.posts.push(PostObject); // Ajout du post dans le tableau 
        this.emitPostSubject(); // Actualiser la liste avec le post en plus 
    }

    emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    deleteIt(post : Post) {
        let index = this.posts.findIndex(d => d.title === post.title); // Récupérer l'index du post à supprimer
        this.posts.splice(index, 1); // Supprime le post 
        this.emitPostSubject(); // Actualiser la liste avec le post en moins 
    }

}