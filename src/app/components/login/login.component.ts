import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';
import { InterfazUsuario } from '../../Services/interface.User';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos: any[] = [];
  usuario : InterfazUsuario;
  token: any = [];

  flag: boolean = false;
  activarProgress: boolean = true;
  forma: NgForm;
  useLocalStorage: any;

  constructor(private _router: Router,
     protected _servicesServices: ServicesService,
     protected _interfazUsuario: InterfazUsuario) { }

  ngOnInit() {}

  guardar(forma: NgForm){
    /*if (forma.invalid) {
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }*/
    /*localStorage para poder almacenar datos en el navegador, persistan y esten disponibles
    durante la navegación, hasta que esta información sea borrada del navegador */
    //localStorage.setItem('token','Uso de localStorage');
    //this.useLocalStorage = localStorage.getItem('token');
    //console.log('Hola');
    //console.log(this.useLocalStorage);
    /*if (forma.valid) {
      this.usuario = {
        nombre: forma.value.nombre,
        contraseña: forma.value.contraseña
      }*/
      this._servicesServices.IncioSession()
      .subscribe(
        result =>
          console.log(this.token),
        
        err => console.error(err)
      );
       /*this._servicesServices.IncioSession()
      .subscribe(
        result => {
          console.log('Hola');
        },
        err => console.error(err)
      );*/
      /*this.flag = true;
    this.activarProgress = false;
    setTimeout(() => {
      this._router.navigate(['/home']);
     }, 2000);
     }*/
  }

  Registro(){
    this._servicesServices.IncioSession()
      .subscribe(
        result =>
          console.log(this.token),
        
        err => console.error(err)
      );
    //this._router.navigate(['/RegistroUsuario']);
  }

  ocultarForm(){
    
  }
}
