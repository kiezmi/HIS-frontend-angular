import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PacienteComponent } from '../paciente/paciente.component';
import { AuthGuard } from '../guards/guard.service';
import { AllGuard } from '../guards/all.guard';

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
        path: 'paciente/:id',
        component: PacienteComponent,
        canActivate: [AuthGuard, AllGuard],
    },
    /*  {
         path: 'medico/:id',
         component: MedicoComponent,
     },
     {
         path: 'tecnico/:id',
         component: TecnicoComponent,
     },
     {
         path: 'admin/:id',
         component: AdminComponent,
     }, */
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