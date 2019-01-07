import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { Evento } from '../_model/Evento';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-eventoview',
  templateUrl: './eventoview.component.html',
  styleUrls: ['./eventoview.component.css']
})
export class EventoviewComponent implements OnInit {

  evento : Evento;

	constructor(private service: ApiService, private router: Router) { /*private service: */
  }

  ngOnInit() {
    this.evento = this.service.getCurrentEvento();
    //this.service.getCurrentEvento().catch(err => console.log(err));
  }

  onViewAll(){
    //		this.service.setCurrentItem(item);
        this.router.navigateByUrl("/eventos");
      }
    
}
