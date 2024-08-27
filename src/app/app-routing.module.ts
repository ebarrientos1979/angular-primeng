import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormshoppingComponent } from './formularios/formshopping/formshopping.component';
import { PrintboletasComponent } from './formularios/printboletas/printboletas.component';
import { PageNotFoundComponent } from './formularios/page-not-found/page-not-found.component';
import { AuthGuard } from './general/components/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/carrito-compras',
    pathMatch: 'full',
  },
  {
    path: 'carrito-compras',
    component: FormshoppingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'boletas',
    component: PrintboletasComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
