import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { TextMaskModule } from 'angular2-text-mask';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaMobileComponent } from './lista-mobile/lista-mobile.component';
import { ListaComponent } from './lista/lista.component';
import { ContratosService } from './services/contratos.service';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent,
    ListaMobileComponent
  ],
  imports: [BrowserModule, FormsModule, MaterializeModule, TextMaskModule],
  providers: [ContratosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
