import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';

const routes: Routes = [
  {
   path: '',
   redirectTo:'/todo/create',
   pathMatch:'full'
  },
  {
    path:'create',
    component: CreateComponent
  },
  {
    path:'edit/:id',
    component:CreateComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
