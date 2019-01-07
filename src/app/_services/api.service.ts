import { Injectable } from '@angular/core';
import { Evento } from '../_model/Evento';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractEventoService } from './evento/abstract-evento.service';
import { MockEventoService } from './evento/mock-evento.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

	eventosStrategy: AbstractEventoService;

	constructor(private http: HttpClient) { 
		
		this.eventosStrategy = new MockEventoService(); //MockEventoService
	}
	getCurrentEvento(): Evento {
		return this.eventosStrategy.getCurrentEvento();
	};
	setCurrentEvento(evento: Evento) {
		this.eventosStrategy.setCurrentEvento(evento);
	};
	getEventos(): Promise<Evento[]> {
		return this.eventosStrategy.getEventos();
	};
	removeEvento(evento: Evento): Promise<Object> {
		return this.eventosStrategy.removeEvento(evento);
	};
	addEvento(evento: Evento): Promise<Object>{
		return this.eventosStrategy.addEvento(evento);
	};
	updateEvento(evento: Evento): Promise<Object>{
		return this.eventosStrategy.updateEvento(evento);
	};
}
