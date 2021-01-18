import { Component } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularx-social-login-example';

  public user: SocialUser

  constructor(private authService: SocialAuthService) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  public googleLogin() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  public faceBookLogin() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

  public microsoftLogin() {
    this.authService.signIn(MicrosoftLoginProvider.PROVIDER_ID)
  }

  public isLoggedIn(): boolean {
    return this.user != null;
  }

  public logout () {
    this.authService
        .signOut()
        .finally( () => {
          this.user = null
        })
  }
}
