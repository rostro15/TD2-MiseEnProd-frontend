import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.localStorage.clear();
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isSuperAdmin(): any {

    const user = window.localStorage.getItem(USER_KEY);

    if (user) {
      const currentUser = JSON.parse(user);

      if(currentUser.roles.includes("ROLE_SUPERADMIN")){
        return true;
      }

      return false;
    }

    return null;
  }

  public isAdmin(): any {

    const user = window.localStorage.getItem(USER_KEY);

    if (user) {
      const currentUser = JSON.parse(user);

      if(currentUser.roles.includes("ROLE_ADMIN")){
        return true;
      }

      return false;
    }

    return null;
  }

  public isDoctor(): any {

    const user = window.localStorage.getItem(USER_KEY);

    if (user) {
      const currentUser = JSON.parse(user);

      if(currentUser.roles.includes("ROLE_DOCTOR")){
        return true;
      }

      return false;
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}