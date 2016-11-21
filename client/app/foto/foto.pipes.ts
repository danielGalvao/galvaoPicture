import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByTitle'
})

export class FilterByTitle implements PipeTransform {

  transform(fotos, typed: string){
    typed = typed.toLowerCase();
    return fotos.filter(foto => foto.titulo.toLowerCase().includes(typed));
  }
}
