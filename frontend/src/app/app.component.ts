import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeEnum, ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,OnDestroy {
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
