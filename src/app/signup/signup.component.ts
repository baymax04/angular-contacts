import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // 初始化对象
  signupForm = {
    email: '', // 默认为空字符串
    password: ''
  };

  // 声明一个err_msg
  // tslint:disable-next-line:variable-name
  email_err_msg = '';

  // 通过双向绑定，把相应的字段绑定到页面表单相应的控件中

  // 在组件类中声明一个私有成员http 它的类型是 HttpClient  (现在需要为 any类型  版本问题吧)
  // 那么 Angular 会自动去实例化 HttpClient 得到一个实例
  // 然后我们就可以在组件中使用http 这个成员来调用 一些请求方法
  // 例如 http.get  http.post...
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  signup() {
    // 1.表单验证
    // 2.获取表单数据
    // 3.发起http 请求和服务端交互
    // 4.根据响应结果做交互处理
    const formData = this.signupForm;
    this.http.post('http://localhost:3000/users', formData).toPromise()
      .then((data: any) => {
        this.email_err_msg = '';
        window.localStorage.setItem('auth_token', data.token);
        window.localStorage.setItem('user)info', JSON.stringify(data.user));
        // window.alert('用户注册成功！');
        // 用户注册成功后，进行路由跳转，跳转到首页
        this.router.navigate(['/']);
      }).catch((err: any) => {
        console.log(err);
        if (err.status === 409) {
          this.email_err_msg = '邮箱被占用';
        }
      });
  }
}
