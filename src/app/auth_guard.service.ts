import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// 验证导航，但还未生效
// 需要找到路由模块 app-routing.module.ts

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate() {
        const token = window.localStorage.getItem('auth_token');
        if (!token) {
          // 跳转路由
          this.router.navigate(['/signin']);
          return false; // 如果守卫失败，返回false， 不能进行路由导航
        }
        // 如果验证通过，则放行，继续完成导航
        return true;
    }
}
