import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  nombre: string;

  constructor(private _service: ServicesService) { }

  ngOnInit(): void {
    
  }
}
