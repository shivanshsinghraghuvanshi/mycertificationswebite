import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any;
  authState: AuthState;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      // tslint:disable-next-line: no-string-literal

      this.ref.detectChanges();

    });
    Auth.currentCredentials().then((info) => {
      const cognitoIdentityId = info.identityId;
    });
  }
  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
