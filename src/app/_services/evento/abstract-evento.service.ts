import { Injectable } from '@angular/core';
import { Evento } from 'src/app/_model/Evento';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractEventoService {

  currentEvento: Evento;

	constructor() { }

  getCurrentEvento(): Evento {
		return this.currentEvento;
	};

  setCurrentEvento(evento: Evento) {
		this.currentEvento = evento;
	};

  abstract getEventos(): Promise<Evento[]>;
	abstract removeEvento(evento: Evento): Promise<Object>;
	abstract addEvento(evento: Evento): Promise<Object>;
	abstract updateEvento(evento: Evento): Promise<Object>;
}
