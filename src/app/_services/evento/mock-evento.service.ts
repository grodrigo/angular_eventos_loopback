import { Injectable } from '@angular/core';
import { AbstractEventoService } from './abstract-evento.service';
import { Evento } from 'src/app/_model/Evento';

@Injectable({
  providedIn: 'root'
})
export class MockEventoService extends AbstractEventoService {

	eventos: Evento[];

	constructor(){
		super();
		this.loadEventos();
	}

	loadEventos(): void {
		let date1,date2;
		date1 = new Date(2019,3,20,22,30,0);
		date2 = new Date(2019,2,28,20,0,0);
		this.eventos = [
			new Evento("Evento 1", date1,'12 y 54 n°530','La Plata','people-at-party.png'),
			new Evento("Evento 2", date2,'Scalabrini Ortiz al 1200','Capital Federal'),
			new Evento("Evento 3", date2,'Otra dirección','Avellaneda'),
			new Evento("Evento 4", date1,'122 y 38','La Plata'),
			new Evento("Evento 5", date2,'Scalabrini Ortiz al 1200','Capital Federal'),
			];
	  
	};

	getEventos(): Promise<Evento[]> {
		return new Promise((resolve) => {
			resolve(this.eventos);
		});
	};
	
	removeEvento(evento: Evento): Promise<Object> {
		return new Promise((resolve) => {
			this.eventos = this.eventos.filter(obj => obj !== evento);
			resolve();
		});
	};

	addEvento(evento: Evento): Promise<Object> {
		return new Promise((resolve) => {
			this.eventos.push(evento);
			resolve();
		});
	};

	updateEvento(evento: Evento): Promise<Object> {
		return new Promise((resolve) => {
			this.eventos.some(storedEvento => {
				if (storedEvento.id == evento.id){
					storedEvento.name = evento.name;
					return true;
				}
			});
			resolve();
		});
	};
}