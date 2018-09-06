import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateManagerService } from './state-manager.service'
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/guard.service';
import { AllGuard } from './guards/all.guard';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patient/patient.component';
import { HistoryComponent } from './history/history.component';
import { HistoriesComponent } from './histories/histories.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    PatientsComponent,
    PatientComponent,
    HistoryComponent,
    HistoriesComponent,
    CreateUserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    StateManagerService,
    AuthGuard,
    AllGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
