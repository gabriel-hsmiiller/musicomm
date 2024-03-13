import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark"
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _theme$: BehaviorSubject<ThemeEnum> = new BehaviorSubject<ThemeEnum>(ThemeEnum.LIGHT);
  public theme$ = this._theme$.asObservable();

  constructor(private ref: ApplicationRef) {
    const darkModeOn =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(darkModeOn){
      this._theme$.next(ThemeEnum.DARK);
    }

    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
      const turnOn = e.matches;
      this._theme$.next(turnOn ? ThemeEnum.DARK : ThemeEnum.LIGHT);

      this.ref.tick();
    });
  }

  set theme(value: ThemeEnum) {
    this._theme$.next(value);
    this.ref.tick();
  }
}
