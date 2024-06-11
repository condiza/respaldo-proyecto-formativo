import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './features/feature-a/pages/home/home.component';
import { NosotrosComponent } from './features/feature-a/pages/nosotros/nosotros.component';
import { MaintenancePageComponentComponent } from './shared/components/organisms/maintenance-page-component/maintenance-page-component.component';

const routes: Routes = [
  {
    path: 'Registro',
    loadChildren: () => import('./features/feature-a/pages/Auth/auth.routes').then(m => m.AuthRoutingModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Nosotros',
    component: NosotrosComponent
  },
  {
    path: 'Ayuda',
    component: MaintenancePageComponentComponent
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
