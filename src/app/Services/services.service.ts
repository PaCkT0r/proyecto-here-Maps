import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InterfazUsuario } from '../Services/interface.User';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // ruta de la API
  apiURL = 'http://itsmarts.duckdns.org/apiComercio/login';
  

  constructor(private _http:HttpClient) { }

  

  /*======================================
    CRUD metodos para consumir API
  ======================================*/

  /*public InsertNewUser(interfazusuario: InterfazUsuario){
    let headers = new HttpHeaders({'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjpbeyJpZF91c3VhcmlvIjozNSwibm9tYnJlIjoicGF0byIsImFwZWxsaWRvIjoicGF0byIsImNvcnJlbyI6InBhdG9AZ21haWwuY29tIiwiY29udHJhc2XDsWEiOiIkMmEkMTAkejVoRFguUUNHM2dnNnE3QzVHSXYvLmVFU0xTcWNVZjNWTEUwaDl3YzRjbExKMjQuOFB6Wi4iLCJpbWciOm51bGwsInRlbGVmb25vIjoiNDE0MTEzNDQ0NSJ9XSwiaWF0IjoxNTkzMDE3ODIxLCJleHAiOjE1OTMxOTA2MjF9.559W1jiBj1-EIE7qN1eaB2M8BUHXpV7VTlFEUHnuk-8'})/*.set('content-type', 'application/json')
    
    let body = {interfazusuario}
    return  this._http.post(`${this.apiURL}/usuario`, body, {headers}, )
  }*/

  public IncioSession(){
    // let body = {interfazusuario}
    //const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let body =  InterfazUsuario;

    return this._http.post(this.apiURL, body);
  }

  /*getUsuarios( ){
    return this._http.get('http://itsmarts.duckdns.org/apiComercio/usuario');
  }*/
  
}
