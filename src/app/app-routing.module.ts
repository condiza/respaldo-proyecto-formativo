import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaintenancePageComponentComponent } from './shared/components/organisms/maintenance-page-component/maintenance-page-component.component';
import { HomeComponent } from './features/feature-a/pages/home/home.component';
import { LoginComponent } from './features/feature-a/pages/login/login.component';

const routes: Routes = [
  {
    path: 'Registro',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Nosotros',
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
