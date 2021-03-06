import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.services';

import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor ( private listaDeseos : ListaDeseosService,
                private navController : NavController ) {  }

  ngOnInit() {}

  irAAgregar () {
    this.navController.push(AgregarComponent);
  }
}
