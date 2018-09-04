import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HistorialComponent } from './historial/historial.component';
import { HistorialesComponent } from './historiales/historiales.component';
import { StateManagerService } from './state-manager.service'


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
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [StateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
