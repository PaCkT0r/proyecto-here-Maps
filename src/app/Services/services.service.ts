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
  apiURL = 'http://itsmarts.duckdns.org/apiComercio';
  

  constructor(private _http:HttpClient) { }

  

  /*======================================
    CRUD metodos para consumir API
  ======================================*/

  getUsers(){
    let headers = new HttpHeaders({
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjpbeyJpZF91c3VhcmlvIjozNSwibm9tYnJlIjoicGF0byIsImFwZWxsaWRvIjoicGF0byIsImNvcnJlbyI6InBhdG9AZ21haWwuY29tIiwiY29udHJhc2XDsWEiOiIkMmEkMTAkejVoRFguUUNHM2dnNnE3QzVHSXYvLmVFU0xTcWNVZjNWTEUwaDl3YzRjbExKMjQuOFB6Wi4iLCJpbWciOm51bGwsInRlbGVmb25vIjoiNDE0MTEzNDQ0NSJ9XSwiaWF0IjoxNTkyOTM1NzA0LCJleHAiOjE1OTMxMDg1MDR9.0oEElfE04-8x3j3Sk_2ziZh9STA3KiBApoFMVPxYWlA'
    })
    return this._http.get(this.apiURL + '/usuario', {headers});
  }
}
