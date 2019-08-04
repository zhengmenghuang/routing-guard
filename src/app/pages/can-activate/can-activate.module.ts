import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanActivateRoutingModule } from './can-activate-routing.module';
import { CanActivateComponent } from './can-activate.component';

@NgModule({
  declarations: [CanActivateComponent],
  imports: [
    CommonModule,
    CanActivateRoutingModule
  ]
})
export class CanActivateModule { }
