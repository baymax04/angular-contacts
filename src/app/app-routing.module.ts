import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

// 创建路由表
const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

// 0.路由模块初始化
// 1.配置路由表
// 请求 xxx 路径的时候，导航到某给组件
// 2.配置路由出口，及路由导航链接
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // routes路由表 被作用于路由模块
  exports: [RouterModule]
})
export class AppRoutingModule { }
