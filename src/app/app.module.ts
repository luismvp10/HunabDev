import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { UneteComponent } from './components/unete/unete.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

//Services
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactanosComponent,
    UneteComponent,
    PrivacidadComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
      }),
  ],
  providers: [
    MessageService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
