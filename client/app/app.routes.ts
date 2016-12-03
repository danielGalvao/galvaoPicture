import { RouterModule, Router } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'cadastro/:id', component: RegisterComponent },
  { path: '**', component: ListComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
