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
    this.initForm(); // Initialisation du formulaire 
  }

  initForm() {
    this.itemForm = this.formBuilder.group({
      title: '',
      content: ''
    });
}

  onSubmit() {                             // envoi du formulaire vers le service
  const formValue = this.itemForm.value;
  const title = formValue['title']; // Récuperer la valeur "title" du formulaire
  const content = formValue['content']; // Récuperer la valeur "content" du formulaire
  this.itemService.addItem(title, content); // Ajout de l'item dans l'array du service 
  this.router.navigate(['/item']); // Retour a la list d'item 
  }

}
