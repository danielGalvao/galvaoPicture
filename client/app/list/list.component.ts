import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: './list.component.html'
})

export class ListComponent {

  fotos: Object[] = [];

  constructor(service: FotoService) {
    service.list()
      .subscribe(
          fotos => this.fotos = fotos,
          erro => console.log(erro)
      );
  }

  remove(foto) {
    console.log(foto);
  }
}
