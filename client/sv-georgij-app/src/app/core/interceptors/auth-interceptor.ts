import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { BehaviorSubject, catchError, filter, switchMap, throwError, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

let isRefreshing = false;
const refreshSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const isAuthEndpoint = 
  req.url.includes("/auth/login") ||
  req.url.includes("/auth/refresh");

  const token = authService.getAccessToken();
  const authRequest = token && !isAuthEndpoint
  ? req.clone({ setHeaders: {Authorization: `Bearer ${token}`} })
  : req;

  return next(authRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if(error.status !== 401 || isAuthEndpoint) {
        return throwError(() => error)
      }

      if(isRefreshing) {
        return refreshSubject.pipe(
          filter(token => token !== null),
          take(1),
          switchMap(newToken => {
            const retried = req.clone ({ setHeaders: { Authorization: `Bearer ${newToken}` } });
            return next (retried)
          })
        )
      }

      isRefreshing = true;
      refreshSubject.next(null);

      return authService.refreshAccessToken().pipe(
        switchMap(() => {
          const newToken = authService.getAccessToken()!;
          isRefreshing = false;
          refreshSubject.next(newToken);
          const retried = req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } })
          return next(retried);
        }),
        catchError(refreshError => {
          isRefreshing = false;
          refreshSubject.next(null);
          authService.logout().subscribe();
          router.navigate(["/login"]);
          return throwError(() => refreshError);
        })
      )
    })
  )
};
