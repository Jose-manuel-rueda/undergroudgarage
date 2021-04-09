// Importar modulos de router angular

import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

// Importar componentes

import { ContactoComponent } from "./component/contacto/contacto.component";
import { RedesSocialesComponent } from "./component/redes-sociales/redes-sociales.component";
import { ErrorComponent } from "./component/error/error.component";
import { SobreNosotrosComponent } from "./component/sobre-nosotros/sobre-nosotros.component";
import { VehiculosOcasionComponent } from "./component/vehiculos-ocasion/vehiculos-ocasion.component";
import { DetalleVehiculoComponent } from "./component/detalle-vehiculo/detalle-vehiculo.component";


// Array de rutas

const appRoutes: Routes = [
    {path: '', component: SobreNosotrosComponent},
    {path: 'sobre-mi', component: SobreNosotrosComponent},
    {path: 'vehiculos-ocasion', component: VehiculosOcasionComponent},
    {path: 'vehiculos-ocasion/:id', component: DetalleVehiculoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: ErrorComponent},
];

// Exportar el modulo del router

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);