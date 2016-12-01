import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FotoService } from '../foto/foto.service';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  foto: FotoComponent = new FotoComponent();
  service: FotoService;

  constructor(service: FotoService) {
    this.service = service;
  }

  addFoto(event) {
    event.preventDefault();
    console.log(this.foto);
    this.service.insert(this.foto)
      .subscribe(() => {
          this.foto = new FotoComponent();
          console.log('Foto salva com sucesso');
      }, erro => {
          console.log(erro);
      });
  }
}
