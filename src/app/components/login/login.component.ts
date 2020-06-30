import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag: boolean = false;
  activarProgress: boolean = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm){

  }
  ocultarForm(){
    this.flag = true;
    this.activarProgress = false;
    console.log('Hola mundo');
    setTimeout(() => {
      this._router.navigate(['/home']);
     }, 2000);
  }
}
