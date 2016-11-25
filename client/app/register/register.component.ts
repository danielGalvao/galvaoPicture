import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html'

})
export class RegisterComponent {

  foto: FotoComponent = new FotoComponent();
  http: Http;

  constructor(http: Http) {
      this.http = http;
  }

  addFoto() {
    event.preventDefault();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers}).subscribe(() => {
      this.foto = new FotoComponent();
    });
  }
}
