import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  itemForm: FormGroup;

  constructor(private itemService: ItemService,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.itemForm = this.formBuilder.group({
      title: '',
      content: ''
    });
}

  onSubmit() {
  const formValue = this.itemForm.value;
  const title = formValue['title'];
  const content = formValue['content'];
  this.itemService.addItem(title, content);
  this.router.navigate(['/item']);
  console.log('titre ' + formValue['title']);
  console.log('content ' + formValue['content']);
  }

}
