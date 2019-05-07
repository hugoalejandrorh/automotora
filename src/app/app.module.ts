import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { AutomovilesService } from './services/automoviles.service';
//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AutomovilesComponent } from './components/automoviles/automoviles.component';
import { AutomovilComponent } from './components/automovil/automovil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    AutomovilesComponent,
    AutomovilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    AutomovilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
