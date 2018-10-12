import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private itemService: ItemService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
  const title = form.value['title'];
  const content = form.value['content'];
  this.itemService.addItem(title, content);
  this.router.navigate(['/appareils']);
  }

}
