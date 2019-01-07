import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { Evento } from '../_model/Evento';

@Component({
  selector: 'app-eventoedit',
  templateUrl: './eventoedit.component.html',
  styleUrls: ['./eventoedit.component.css']
})
export class EventoeditComponent implements OnInit {

  editEventoForm : FormGroup;

	constructor(private service: ApiService, private router: Router, private formBuilder: FormBuilder) { /*private service*/
		this.editEventoForm = formBuilder.group(this.service.getCurrentEvento());
	}

  ngOnInit() {
  }

  onSubmit(): void {
    this.updateEvento(this.editEventoForm.value);
  }

  updateEvento(evento: Evento) {
    this.service.updateEvento(evento)
      .then(() => { this.router.navigateByUrl('/eventos')})
      .catch(err => console.log(err));
  }
}
