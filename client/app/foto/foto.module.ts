import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FilterByTitle } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
  declarations: [ FotoComponent, FilterByTitle ],
  exports: [ FotoComponent, FilterByTitle ],
  providers: [ FotoService ]
})

export class FotoModule {}
