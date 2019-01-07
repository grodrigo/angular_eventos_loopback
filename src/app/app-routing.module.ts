import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventolistComponent } from './eventolist/eventolist.component';
import { EventoviewComponent } from './eventoview/eventoview.component';
import { EventonewComponent } from './eventonew/eventonew.component';
import { EventoeditComponent } from './eventoedit/eventoedit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
  { path: 'eventos', component: EventolistComponent },
  { path: 'view-evento', component: EventoviewComponent },
  { path: 'edit-evento', component: EventoeditComponent },
  { path: 'new-evento', component: EventonewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
