import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  Registro(){
    this._router.navigate(['/RegistroUsuario']);
    console.log('Hola mundo');
  }
  ingresar(){
    this._router.navigate(['/Login']);
  }

}
