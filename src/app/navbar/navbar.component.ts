import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = JSON.parse(window.localStorage.getItem('user_info') || '{}');
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // 退出
  signout() {
    this.http.delete('http://localhost:3000/session')
      .toPromise()
      .then(data => {
        window.localStorage.removeItem('auth_token'); // 退出成功后，删除token
        // 退出后，回到登录页，这时需要使用路由跳转到登录页
        this.router.navigate(['/signin']);
      })
      .catch(err => {
        window.alert('退出失败，请稍后重试...');
      });
  }
}
