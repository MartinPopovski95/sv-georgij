export interface LoginRequest {
    username: string;
    password: string;
}

export interface AuthTokenResponse {
    token: string;
    validTo: string;
    refreshToken: string;
    refreshTokenExpiresAt: string;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

export interface DecodedToken {
    sub: string;
    name: string;
    email: string;
    role: string | string[];
    exp: number;
}