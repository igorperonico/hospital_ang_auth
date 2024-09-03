import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    { path: '', component: NavbarComponent },
    { path: 'login', component: AuthComponent },
    { path: 'appointments', component: AppointmentsComponent }
];
