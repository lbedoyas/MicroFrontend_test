import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'mf',
    loadChildren: () => import('mf/ShowInfoModule').then((m) => m.ShowInfoModule)
  },
  {
    path: 'login',
    loadChildren: () => import('loginAWS/LoginModule').then((m) => m.LoginModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
