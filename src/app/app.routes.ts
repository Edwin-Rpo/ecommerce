import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TiendaComponent } from './pages/tienda/tienda.component';


export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "nosotros", component: NosotrosComponent},
    {path: "tienda", component: TiendaComponent},

];
