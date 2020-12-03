import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from 'ng-gapi';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

}
