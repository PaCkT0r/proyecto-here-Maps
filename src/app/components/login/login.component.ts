import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos: any[] = [];

  flag: boolean = false;
  activarProgress: boolean = true;
  forma: NgForm;
  useLocalStorage: any;

  constructor(private _router: Router, protected _servicesServices: ServicesService) { }

  ngOnInit(): void {
    /*this._servicesServices.getUsers()
    .subscribe(
      (data) => {
        console.log(this.datos = data['results'])
      },
      (error) => {
        console.error(error);
      }
    );
    */
  }

  guardar(forma: NgForm){
    if (forma.invalid) {
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
    /*localStorage para poder almacenar datos en el navegador, persistan y esten disponibles
    durante la navegación, hasta que esta información sea borrada del navegador */
    localStorage.setItem('token','Uso de localStorage');
    this.useLocalStorage = localStorage.getItem('token');
    console.log(this.useLocalStorage);
    console.log();
    if (forma.valid) {
      this.flag = true;
    this.activarProgress = false;
    setTimeout(() => {
      this._router.navigate(['/home']);
     }, 2000);
    }
  }

  Registro(){
    this._router.navigate(['/RegistroUsuario']);
  }

  ocultarForm(){
    
  }
}
