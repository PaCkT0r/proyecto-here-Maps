import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';




@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm){
    console.log(forma.status);
    console.log('forma');
  }
}
