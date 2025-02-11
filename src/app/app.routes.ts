import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { UserComponent } from './components/dashboard/user/user.component';
 
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '**', redirectTo: 'login' }  
];
