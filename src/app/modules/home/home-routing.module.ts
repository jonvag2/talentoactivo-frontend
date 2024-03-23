import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { OursevicesComponent } from './oursevices/oursevices.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
 },
 {
  path: "services",
  component: OursevicesComponent,
  },
  {
    path: '**',
    redirectTo: 'error/404',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
