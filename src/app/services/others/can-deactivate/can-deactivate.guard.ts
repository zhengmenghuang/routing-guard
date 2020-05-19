import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {CanActivateComponent} from '../../../pages/can-activate/can-activate.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanActivateComponent> {
  canDeactivate(component: CanActivateComponent) {
    /**
     * 这里有angular的bug
     * 页面虽然停留在了当前 但是history已经改变 所以当点了取消后需要重新导航到当前url
     * this.location.go(this.router.createUrlTree([], this.route.snapshot).toString());
     */
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
