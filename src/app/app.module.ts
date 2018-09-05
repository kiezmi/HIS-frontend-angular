import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HistorialComponent } from './historial/historial.component';
import { HistorialesComponent } from './historiales/historiales.component';
import { StateManagerService } from './state-manager.service'
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    PacienteComponent,
    PacientesComponent,
    HistorialComponent,
    HistorialesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    StateManagerService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
