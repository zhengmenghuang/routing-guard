import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {CanActivateComponent} from '../../../pages/can-activate/can-activate.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanActivateComponent> {
  canDeactivate(component: CanActivateComponent) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
