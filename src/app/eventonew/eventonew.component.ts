import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { Evento } from '../_model/Evento';

@Component({
  selector: 'app-eventonew',
  templateUrl: './eventonew.component.html',
  styleUrls: ['./eventonew.component.css']
})
export class EventonewComponent implements OnInit {

  newEventoForm : FormGroup;

	constructor(private service: ApiService, private router: Router, private builder: FormBuilder) { /*private service*/
		this.newEventoForm = builder.group(new Evento("",new Date(),"","")); 
	}

  ngOnInit() {
  }

	onSubmit(): void {
		this.addEvento(this.newEventoForm.value);
	} 

	addEvento(evento: Evento) {
		this.service.addEvento(evento)
			.then(() => {console.log("routing");this.router.navigateByUrl('/eventos')})
			.catch(err => console.log(err));
	}

}
