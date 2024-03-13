import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { Subscription } from 'rxjs';
import { ThemeEnum, ThemeService } from '../../theme.service';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent implements OnInit,OnDestroy {
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

  toggleState() {
    this.themeService.theme = this.theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  }
}
