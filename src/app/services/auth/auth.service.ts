import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from 'ng-gapi';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: boolean;
  user: any;

  constructor(private googleAuthService: GoogleAuthService,
    private router: Router) {
      this.authenticated = false;
      this.user = null;
    }

  signInGoogle(){
    this.googleAuthService.getAuth().subscribe( auth => {
      auth.signIn().then( res => {
        const token = res.getAuthResponse().access_token;
        const userInfo = res.getBasicProfile();
        const user = new User(token, userInfo)
        localStorage.setItem('meetingUser', JSON.stringify(user));
        this.router.navigate(['dashboard'])
      }, err =>{
        console.log("SIGN IN WRONG", err);
      })
    })
  }

  signOutGoogle(){
    this.googleAuthService.getAuth().subscribe( auth => {
     try{
        auth.signOut();
        console.log("SIGN OUT SUCCESSFUL", auth);
     }catch(e){
      console.log("SIGN OUT something wrong ocurr", e);
     }
    })
  }

  // Prompt the user to sign in and
  // grant consent to the requested permission scopes
  async signInOffice(): Promise<void> {
    // let result = await this.msalService.loginPopup({})
    //   .catch((reason) => {
    //     console.log('Login failed', JSON.stringify(reason, null, 2));
    //   });

    // if (result) {
    //   this.authenticated = true;
    //   // Temporary placeholder
    //   this.user.displayName = 'Carolina Bracamonte';
    //   this.user.email = 'AdeleV@contoso.com';
    //   this.user.avatar = '/assets/no-profile-photo.png';
    // }
  }

  // Sign out
  signOutOffice(): void {
    // this.msalService.logout();
    // this.user = null;
    // this.authenticated = false;
  }

}
