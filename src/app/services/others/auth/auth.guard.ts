import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 下面 这俩行 用来实现业务代码就行了
    // 登录失败跳转到统一处理页面 还需要把失败的连接(state.url)带过去 处理成功了 在跳过去
    console.log(next, state);
    const auth = Math.random() > 0.5;
    console.log(`${auth ? '允许登录' : '拒绝登录'}到${state.url}`);
    return auth;
  }
}
