import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly key = 'user';

  login(username: string, password: string): boolean {

    if (username === 'marcelo' && password === '1234') {
      localStorage.setItem(this.key, JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.key);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.key);
  }

  getUser(): any | null {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }
}
