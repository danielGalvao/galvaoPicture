import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FilterByTitle } from './foto.pipes';

@NgModule({
  declarations: [ FotoComponent, FilterByTitle ],
  exports: [ FotoComponent, FilterByTitle ]
})

export class FotoModule {}
