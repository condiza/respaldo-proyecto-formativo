import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/organisms/nav-bar/nav-bar.component';
import { DatesComponent } from './components/dates/dates.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';
import { InputDateComponent } from './components/atoms/input-date/input-date.component';
import { InputGroupComponent } from './components/molecules/input-group/input-group.component';
import { SearchOptionsComponent } from './components/molecules/search-options/search-options.component';
import { SearchFormComponent } from './components/organisms/search-form/search-form.component';
import { SearchBarComponent } from './components/templates/search-bar/search-bar.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { CardComponent } from './components/molecules/card/card.component';
import { CardListComponent } from './components/organisms/card-list/card-list.component';
import { TravelSectionComponent } from './components/templates/travel-section/travel-section.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { ContactInfoComponent } from './components/molecules/contact-info/contact-info.component';
import { SocialIconComponent } from './components/molecules/social-icon/social-icon.component';
import { TopBarComponent } from './components/organisms/top-bar/top-bar.component';
import { TextSpanComponent } from './components/atoms/text-span/text-span.component';
import { NavigationNavBarComponent } from './components/atoms/navigation-nav-bar/navigation-nav-bar.component';
import { NavigationMenuComponent } from './components/molecules/navigation-menu/navigation-menu.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { IconUserComponent } from './components/atoms/icon-user/icon-user.component';
import { FooterLinkComponent } from './components/atoms/footer-link/footer-link.component';
import { FooterTitleComponent } from './components/atoms/footer-title/footer-title.component';
import { InputAtomComponent } from './components/atoms/input-atom/input-atom.component';
import { CheckboxAtomComponent } from './components/atoms/checkbox-atom/checkbox-atom.component';
import { LoginFormMoleculeComponent } from './components/molecules/login-form-molecule/login-form-molecule.component';
import { LoginFormComponent } from './components/molecules/login-form/login-form.component';
import { LoginModalComponent } from './components/organisms/login-modal/login-modal.component';
import { LinkComponent } from './components/molecules/link-list/link-list.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { TexComponent } from './components/atoms/tex/tex.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { MaintenanceMessageComponent } from './components/molecules/maintenance-message/maintenance-message.component';
import { MaintenancePageComponentComponent } from './components/organisms/maintenance-page-component/maintenance-page-component.component';
import { HomeComponent } from '../features/feature-a/pages/home/home.component';
import { InputComponent } from './components/atoms/input/input.component';
import { FormFieldComponent } from './components/molecules/form-field/form-field.component';
import { RegisterFormComponent } from './components/organisms/register-form/register-form.component';
import { RegisterPageComponent } from './components/templates/register-page/register-page.component';
import { LoginComponent } from '../features/feature-a/pages/login/login.component';
import { ButtonCloseComponent } from './components/atoms/button-close/button-close.component';
import { CheckComponent } from './components/atoms/check/check.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsSearchFromComponent } from './components/atoms/icons-search-from/icons-search-from.component';

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
    ImageComponent,
    CardComponent,
    CardListComponent,
    TravelSectionComponent,
    IconComponent,
    ContactInfoComponent,
    SocialIconComponent,
    TopBarComponent,
    TextSpanComponent,
    NavigationNavBarComponent,
    NavigationMenuComponent,
    HeaderComponent,
    IconUserComponent,
    FooterLinkComponent,
    FooterTitleComponent,
    InputAtomComponent,
    CheckboxAtomComponent,
    LoginFormMoleculeComponent,
    LoginFormComponent,
    LoginModalComponent,
    LinkComponent,
    FooterComponent,
    TexComponent,
    LogoComponent,
    MaintenanceMessageComponent,
    MaintenancePageComponentComponent,
    HomeComponent,
    InputComponent,
    FormFieldComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    LoginComponent,
    ButtonCloseComponent,
    CheckComponent,
    IconsSearchFromComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    DatesComponent,
    TravelSectionComponent,
    FooterComponent,
    RegisterPageComponent
  ]
})
export class SharedModule { }
