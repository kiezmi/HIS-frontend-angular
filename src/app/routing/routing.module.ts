import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../guards/guard.service';
import { AllGuard } from '../guards/all.guard';
import { PatientsComponent } from '../patients/patients.component';
import { PatientComponent } from '../patient/patient.component';
import { HistoriesComponent } from '../histories/histories.component';
import { HistoryComponent } from '../history/history.component';
import { CreateUserComponent } from '../create-user/create-user.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,

    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'patients',
        component: PatientsComponent,
        canActivate: [AllGuard],
    },
    {
        path: 'patient/:id',
        component: PatientComponent,
        canActivate: [AllGuard],
    },
    {
        path: 'histories',
        component: HistoriesComponent,
        canActivate: [AllGuard],
    },
    {
        path: 'history/:id',
        component: HistoryComponent,
        canActivate: [AllGuard],
    },
    {
        path: 'createUser',
        component: CreateUserComponent,
        canActivate: [AllGuard],
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }