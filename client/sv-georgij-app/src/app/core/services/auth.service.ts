import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthTokenResponse, DecodedToken, LoginRequest } from '../models/auth.models';
import { catchError, map, Observable, tap, of } from 'rxjs';
import { apiUrl } from '../../shared/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly REFRESH_TOKEN_KEY = "refreshToken";
  private readonly http = inject(HttpClient);

  private readonly _accessToken = signal<string | null>(null);

  private readonly _decodedUser = computed<DecodedToken | null>(() => {
    const token = this._accessToken();
    if(!token) return null;
    try{
      const payload = token.split(".")[1];
      return JSON.parse(atob(payload)) as DecodedToken;
    } catch{
      return null;
    }
  });

  readonly isLoggedIn = computed(() => this._accessToken() !== null);

  readonly currentUser = this._decodedUser;

  readonly roles = computed<string[]>(() => {
    const user = this._decodedUser();
    if(!user) return [];
    return Array.isArray(user.role) ? user.role : [user.role]; 
  });

  hasRole(role: string): boolean {
    return this.roles().includes(role);
  }

  getAccessToken(): string | null {
    return this._accessToken();
  }

  login(request: LoginRequest): Observable<void> {
    return this.http.post<AuthTokenResponse>(`${apiUrl}/auth/login`, request).pipe(
      tap(response => this.handleTokenResponse(response)),
      map(() => void 0)
    )
  }

  logout(): Observable<void> {
    const refreshToken = this.getStoredRefreshToken();
    if(!refreshToken) return of(void 0)
      return this.http.post<void>(`${apiUrl}/auth/logout`, { refreshToken }).pipe(
        catchError(() => of(void 0))
      );
  }

  refreshAccessToken(): Observable<void> {
    const refreshToken = this.getStoredRefreshToken();
    if(!refreshToken) {
      this.clearTokens();
      throw new Error("No refresh token available");
    }
    return this.http.post<AuthTokenResponse> (`${apiUrl}/auth/refresh`, { refreshToken }).pipe(
      tap(response => this.handleTokenResponse(response)),
      map(() => void 0)
    )
  }

  initializeAuth(): Observable<void> {
    const refreshToken = this.getStoredRefreshToken();
    if(!refreshToken) return of(void 0)
    return this.refreshAccessToken().pipe(
      catchError(() => {
        this.clearTokens();
        return of(void 0)
      })
    );
  }

  private handleTokenResponse(response: AuthTokenResponse): void {
    this._accessToken.set(response.token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refreshToken);
  }

  private getStoredRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  private clearTokens(): void {
    this._accessToken.set(null);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
}
