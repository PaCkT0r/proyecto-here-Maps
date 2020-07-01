import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ServicesService } from '../../Services/services.service';





@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(protected _servicesServices: ServicesService) { }

  ngOnInit(): void {
    
  }

  guardarRegistro(forma: NgForm){
    if (forma.invalid) {
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
  }
}
