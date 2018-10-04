import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;   
  @Input() loveIts: number;
  @Input() created_at: Date;
  
  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if(this.loveIts < 0) {
      return 'red';
    }
  }

  like() {
    this.loveIts += 1;
  }

  dislike() {
    this.loveIts -= 1;
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 10
    );
  });

}
