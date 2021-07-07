import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';
import { AuthService, User } from 'src/auth/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  subscription: Subscription;
  title = 'Fitness App';
  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  )
  {

  }
  
  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }
  async onLogout(){
    await this.authService.logoutUser();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.router.navigate(['/auth/login']);
  }
}
