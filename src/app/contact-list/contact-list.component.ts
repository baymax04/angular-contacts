import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    // 组件初始化
    this.http.get('http://localhost:3000/contacts')
      .toPromise()
      .then(data => {
        console.log('data===', data);
      })
      .catch(err => {
        console.log('err===', err);
      });
  }

}
