import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  authState: AuthState;
  constructor(public auth: AuthService, private router: Router, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.ref.detectChanges();

    });
  }
  signOut() {
    this.auth.signOut().subscribe(() => {
      window.location.reload();
      this.router.navigate(['/']);
      this.ref.detectChanges();
    });
  }

}
