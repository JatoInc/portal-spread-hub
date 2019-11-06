import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = `Basic ${localStorage.getItem('auth_token')}`;
    const modifiedReq = req.clone({ 
      headers: req.headers.set('Authorization', token),
    });
    return next.handle(modifiedReq);
  }
}