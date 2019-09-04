import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth_guard.service';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagNewComponent } from './tag-new/tag-new.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';

// 创建路由表
const routes: Routes = [
  {
    // path: 'layout',
    // component: LayoutComponent
    path: '',
    redirectTo: '/contacts', // 当请求根路径的时候，跳转到contacts 联系人组件
    pathMatch: 'full'        // 必须完全匹配到路径的时候才重定向
  },
  {
    // 当我们访问contacts时，会先把 LayoutComponent 组件渲染出来
    // 然后把children中path 为空的路由渲染到 LayoutComponent 组件中的路由出口
    path: 'contacts',
    component: LayoutComponent,
    canActivate: [AuthGuard],  // 在导航contacts 之前 先进行路由守卫
    children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        path: 'edit', // 这里的 edit 的请求路径是  /contacts/edit
        component: ContactEditComponent
      },
      {
        path: 'new', // 这里的 new 的请求路径是  /contacts/new
        component: ContactNewComponent
      }
    ]
  },
  {
    path: 'tags',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'edit', // 这里的 edit 的请求路径是  /tags/edit
        component: TagEditComponent
      },
      {
        path: 'new', // 这里的 new 的请求路径是  /tags/new
        component: TagNewComponent
      }
    ]
  },
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
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
