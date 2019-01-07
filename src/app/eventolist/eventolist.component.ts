import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../_model/Evento';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-eventolist',
  templateUrl: './eventolist.component.html',
  styleUrls: ['./eventolist.component.css']
})
export class EventolistComponent implements OnInit {

  eventos : Evento[];
	static instance: EventolistComponent;

	constructor(private service: ApiService, private router: Router) { /*private service: */
  	this.updateLocalEventos();
	}

  updateLocalEventos(){
    console.log("Updating eventos");
    this.service.getEventos().then(eventos => this.eventos = eventos);
  }

  ngOnInit() {
//    console.log(this.eventos);
  }

  onRemove(evento){
    this.service.removeEvento(evento).then(() => this.updateLocalEventos());
  }

  onEdit(evento){
    this.service.setCurrentEvento(evento);
    this.router.navigateByUrl("/edit-evento");
  }

  onView(evento){
		this.service.setCurrentEvento(evento);
		this.router.navigateByUrl("/view-evento");
	}
}
