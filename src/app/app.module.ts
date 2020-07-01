import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    PaginaPrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
