import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  user: any;
  authState: AuthState;
  constructor(private ref: ChangeDetectorRef, private router: Router) { }
  ngOnDestroy() {
    return onAuthUIStateChange;
  }

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      // tslint:disable-next-line: no-string-literal



      if (this.authState === 'signedin' && this.user) {
        //this.router.navigate(['/']);
      }
      this.ref.detectChanges();
    });
    Auth.currentCredentials().then((info) => {
      const cognitoIdentityId = info.identityId;
    });
  }

}
