import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: './list.component.html'
})

export class ListComponent {

  fotos: Object[] = [];
  service: FotoService;
  mensagem: string = '';

  constructor(service: FotoService) {
    this.service = service;
    this.service.list()
      .subscribe(
          fotos => this.fotos = fotos,
          erro => console.log(erro)
      );
  }

  remove(foto) {
    this.service.remove(foto)
      .subscribe(() => {
        let newFotos = this.fotos.slice(0);
        let index = newFotos.indexOf(foto);
        newFotos.splice(index, 1);
        this.fotos = newFotos;
        this.mensagem = 'Foto removida com sucesso';
      },
      erro => {
        console.log(erro);
        this.mensagem = 'Não foi possível remover a foto';
      }
    );
  }
}
