import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule,
    routing,
    FormsModule
  ],
  declarations: [ AppComponent, RegisterComponent, ListComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
