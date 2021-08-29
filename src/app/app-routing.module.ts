import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './modules/user/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  {
    path: 'kanban',
    loadChildren: () => import('./modules/kanban/kanban.module').then(m => m.KanbanModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
