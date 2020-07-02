import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ServicesService } from '../../Services/services.service';
import { InterfazUsuario } from '../../Services/interface.User';

import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';






@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(protected _servicesServices: ServicesService,
    protected _router: Router,
    protected _interfazUsurio: InterfazUsuario) { }

  ngOnInit(): void {
    
  }

  guardarRegistro(forma: NgForm){
    if (forma.invalid) {
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }

    if (forma.valid) {
      let usuario: InterfazUsuario;
      console.log(forma.value);
      usuario = {
        nombre: forma.value.nombre,
        apellido: forma.value.apellido,
        correo: forma.value.correo,
        telefono: forma.value.telefono,
        contrasenauno: forma.value.contrasenauno,
        contrasenados: forma.value.contrasenados
      }
      console.log(usuario);
  
      this._router.navigate(['/Login']);
    

    }
  }
}
