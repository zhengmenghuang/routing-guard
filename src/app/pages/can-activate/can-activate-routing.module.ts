import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanActivateComponent} from './can-activate.component';
import {AuthGuard} from '../../services/others/auth/auth.guard';
import {CanDeactivateGuard} from '../../services/others/can-deactivate/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: CanActivateComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanActivateRoutingModule { }
