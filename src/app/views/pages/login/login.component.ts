import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private gapiService: GoogleApiService) {
    this.gapiService.onLoad().subscribe();
  }

  ngOnInit(): void {
  }

  signInGoogle(){
    this.authService.signInGoogle();
  }

  signInOffice(){
    this.authService.signInOffice();
  }

}
