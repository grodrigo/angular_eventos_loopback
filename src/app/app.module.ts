import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventolistComponent } from './eventolist/eventolist.component';
import { EventoviewComponent } from './eventoview/eventoview.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventoeditComponent } from './eventoedit/eventoedit.component';
import { EventonewComponent } from './eventonew/eventonew.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertComponent } from './_directives/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { UserService } from './_services/user.service';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EventolistComponent,
    EventoviewComponent,
    EventoeditComponent,
    EventonewComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    fakeBackendProvider,
    AuthenticationService,
    AlertService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
