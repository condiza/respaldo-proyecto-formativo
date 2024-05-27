import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DatesComponent } from './components/dates/dates.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';
import { InputDateComponent } from './components/atoms/input-date/input-date.component';
import { InputGroupComponent } from './components/molecules/input-group/input-group.component';
import { SearchOptionsComponent } from './components/molecules/search-options/search-options.component';
import { SearchFormComponent } from './components/organisms/search-form/search-form.component';
import { SearchBarComponent } from './components/templates/search-bar/search-bar.component';
@NgModule({
  declarations: [
    NavBarComponent,
    DatesComponent,
    ButtonComponent,
    InputTextComponent,
    InputDateComponent,
    InputGroupComponent,
    SearchOptionsComponent,
    SearchFormComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    DatesComponent
  ]
})
export class SharedModule { }
