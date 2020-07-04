import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  Registro(){
    this._router.navigate(['/RegistroUsuario']);
  }
  ingresar(){
    this._router.navigate(['/Login']);
  }

}
