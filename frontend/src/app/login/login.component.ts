import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeEnum, ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';
import { ThemeComponent } from '../shared/theme/theme.component';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit,OnDestroy {
  public theme!: ThemeEnum;
  public ThemeEnum = ThemeEnum;

  private themeSubscription?: Subscription;
  
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(t => this.theme = t);
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }

}
