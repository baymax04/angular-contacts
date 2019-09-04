import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 在拦截器中添加token， 所有请求都会经过他
        const token = window.localStorage.getItem('auth_token');
        const authReq = req.clone({headers: req.headers.set('X-Access-Token', token)});
        return next.handle(authReq);
    }
}
