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
  }

  Registro(){
    this._router.navigate(['/RegistroUsuario']);
  }

  ocultarForm(){
    this.flag = true;
    this.activarProgress = false;
    setTimeout(() => {
      this._router.navigate(['/home']);
     }, 2000);
  }
}
