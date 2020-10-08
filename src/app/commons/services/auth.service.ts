import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;
  /**
   *
   */
  constructor() {
    this.loggedIn = new BehaviorSubject<boolean>(false);

  }

  isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser().then(() => {
      this.loggedIn.next(true);
      return true;
    }).catch(() => {
      this.loggedIn.next(false);
      return false;
    }));
  }

  signOut(): Observable<boolean> {
    return from(Auth.signOut().then(() => {
      this.loggedIn.next(false);
      return false;
    }).catch(() => {
      return true;
    }));
  }
}
