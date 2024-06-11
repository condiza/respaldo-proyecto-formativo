import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/organisms/nav-bar/nav-bar.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';
import { InputDateComponent } from './components/atoms/input-date/input-date.component';
import { InputGroupComponent } from './components/molecules/input-group/input-group.component';
import { SearchOptionsComponent } from './components/molecules/search-options/search-options.component';
import { SearchFormComponent } from './components/organisms/search-form/search-form.component';
import { SearchBarComponent } from './components/organisms/search-bar/search-bar.component';
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
import { RegisterComponent } from '../features/feature-a/pages/Auth/register/register.component';
import { ButtonCloseComponent } from './components/atoms/button-close/button-close.component';
import { CheckComponent } from './components/atoms/check/check.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsSearchFromComponent } from './components/atoms/icons-search-from/icons-search-from.component';
import { DatesComponent } from './components/templates/dates/dates.component';
import { NosotrosTemplatesComponent } from './components/templates/nosotros-templates/nosotros-templates.component';
import { NosotrosComponent } from '../features/feature-a/pages/nosotros/nosotros.component';
import { ImgNavBarComponent } from './components/atoms/img-nav-bar/img-nav-bar.component';
import { NavBarImgComponent } from './components/molecules/nav-bar-img/nav-bar-img.component';
import { TitleSectinsComponent } from './components/atoms/title-sectins/title-sectins.component';
import { TitleAllComponent } from './components/atoms/title-all/title-all.component';
import { IconsNosotrosComponent } from './components/atoms/icons-nosotros/icons-nosotros.component';
import { TargetNosotrosComponent } from './components/molecules/target-nosotros/target-nosotros.component';
import { TitleCartsComponent } from './components/atoms/title-carts/title-carts.component';
import { TextNostrosComponent } from './components/atoms/text-nostros/text-nostros.component';
import { CartNosotrosComponent } from './components/organisms/cart-nosotros/cart-nosotros.component';
import { SpaceEmptyComponent } from './components/atoms/space-empty/space-empty.component';
import { TextEspaceEmptyComponent } from './components/atoms/text-espace-empty/text-espace-empty.component';

@NgModule({
  declarations: [
    NosotrosComponent,
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
    RegisterComponent,
    ButtonCloseComponent,
    CheckComponent,
    IconsSearchFromComponent,
    NosotrosTemplatesComponent,
    ImgNavBarComponent,
    NavBarImgComponent,
    TitleSectinsComponent,
    TitleAllComponent,
    IconsNosotrosComponent,
    TargetNosotrosComponent,
    TitleCartsComponent,
    TextNostrosComponent,
    CartNosotrosComponent,
    SpaceEmptyComponent,
    TextEspaceEmptyComponent,
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
    RegisterPageComponent,
    NosotrosTemplatesComponent
  ]
})
export class SharedModule { }
