import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from "./app-routing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosOcasionComponent } from './component/vehiculos-ocasion/vehiculos-ocasion.component';
import { SobreNosotrosComponent } from './component/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { RedesSocialesComponent } from './component/redes-sociales/redes-sociales.component';
import { DetalleVehiculoComponent } from './component/detalle-vehiculo/detalle-vehiculo.component';
import { ErrorComponent } from './component/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosOcasionComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    RedesSocialesComponent,
    DetalleVehiculoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
