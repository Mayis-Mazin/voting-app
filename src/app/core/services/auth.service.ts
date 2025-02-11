import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRole } from '../enums/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();

  constructor(private router: Router) {}

  login(username: string, role: UserRole) {
    const token = this.generateFakeToken(username, role);
    localStorage.setItem('token', token);
    this.redirectToDashboard(role);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Navigates the user to the appropriate dashboard based on their role.
 *
 * @param role - The role of the user, which determines the dashboard route.
 *                Possible values are UserRole.Admin, UserRole.User, or UserRole.Employee.
 */

/******  2cd99bad-4f98-473b-bc68-cb9496f48627  *******/  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  getUserRole(): UserRole {
    const token = this.getToken();
    if (token) {
      const decoded = this.jwtHelper.decodeToken(token);
      return decoded.role;
    }
    return UserRole.User;
  }

  private generateFakeToken(username: string, role: UserRole): string {
    return btoa(JSON.stringify({ username, role, exp: Math.floor(Date.now() / 1000) + 3600 }));
  }

  private redirectToDashboard(role: UserRole) {
    switch (role) {
      case UserRole.Admin:
        this.router.navigate(['/admin']);
        break;
      case UserRole.User:
        this.router.navigate(['/user']);
        break;
      case UserRole.Employee:
        this.router.navigate(['/employee']);
        break;
    }
  }
}
