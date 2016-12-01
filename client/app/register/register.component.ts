import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  foto: FotoComponent = new FotoComponent();
  service: FotoService;
  meuForm: FormGroup;

  constructor(service: FotoService, fb: FormBuilder) {
    this.service = service;
    this.meuForm = fb.group({
        titulo: ['', Validators.compose(
            [Validators.required, Validators.minLength(4)]
        )],
        url: ['', Validators.required],
        descricao: [''],
    });
  }

  addFoto(event) {
    event.preventDefault();
    this.service.insert(this.foto)
      .subscribe(() => {
          this.meuForm.reset();
          console.log('Foto salva com sucesso');
      }, erro => {
          console.log(erro);
      });
  }
}
