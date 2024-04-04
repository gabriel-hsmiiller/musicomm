import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    class: 'flex-1'
  }
})
export class HomeComponent {

}
