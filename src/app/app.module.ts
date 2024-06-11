import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalService } from './features/feature-a/services/modal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [ModalService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
