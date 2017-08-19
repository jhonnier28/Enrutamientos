import {Routes, RouterModule} from '@angular/router'
import {InicioComponent} from './inicio.component'
import {NosotrosComponent} from './nosotros.component'
import {ContactoComponent} from './contacto.component'

const APP_ROUTES: Routes =[
    {path:'inicio', component: InicioComponent},
    {path:'nosotros', component:NosotrosComponent },
    {path:'contacto', component: ContactoComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
