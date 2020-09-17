import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import {  AuthConfigService } from '../../app/services/auth-config.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardsService implements CanActivate {


  constructor(private authConfigService: AuthConfigService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authConfigService.currentUser.pipe(
      map(user => {
        if (!user) {
          this.router.navigate(['/home']);
          console.log(user);
          console.log(false);
          return false;
        }
        console.log(true);
        console.log(user);
        this.router.navigate(['/home']);
        return true;
      })
    );
  }
  }
