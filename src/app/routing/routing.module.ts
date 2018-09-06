import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
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
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'pacientes',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'medico/:id',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'medicos',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'tecnico/:id',
        component: DashboardComponent,
        canActivate: [AuthGuard, AllGuard],
    },
    {
        path: 'tecnicos',
        component: DashboardComponent,
        canActivate: [AuthGuard, AllGuard],
    },
    {
        path: 'historial/:id',
        component: DashboardComponent,
        canActivate: [AuthGuard, AllGuard],
    },
    {
        path: 'historiales',
        component: DashboardComponent,
        canActivate: [AuthGuard, AllGuard],
    },
    {
        path: 'admin/',
        component: DashboardComponent,
        canActivate: [AuthGuard, AllGuard],
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