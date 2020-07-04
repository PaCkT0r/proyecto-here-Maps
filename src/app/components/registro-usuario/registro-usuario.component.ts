import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ServicesService } from '../../Services/services.service';
import { InterfazUsuario } from '../../Services/interface.User';
import { Router } from '@angular/router';






@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario: InterfazUsuario;

  constructor(protected _servicesServices: ServicesService,
    protected _router: Router,
    protected _interfazUsurio: InterfazUsuario) { }

  ngOnInit(): void {
    
  }
  //Metodo guardar registro con valaciones
  guardarRegistro(forma: NgForm){
    /*if (forma.invalid) {
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }*/
    if (forma.valid) {
      /**Revisar bien los nombres en los formulaios para no tener algun problema
         * por comerce alguna letra
         */
      /**Objeto para poder pasar los valores a la interfaz y poder tratarlos */
      this.usuario = {
        nombre: forma.value.nombre,
        apellido: forma.value.apellido,
        correo: forma.value.correo,
        contraseña: forma.value.contrasenauno,
        telefono: forma.value.telefono,
        contrasenados: forma.value.contrasenados

      }
      delete this.usuario.id;
      delete this.usuario.contrasenados;
      delete this.usuario.img;
       /*this._servicesServices.InsertNewUser(this.usuario).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );*/

      this._router.navigate(['/Login']);
    

    }
  }
}
