import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBarMainComponent } from '../../../shared/app-bar-main/app-bar-main.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [RouterOutlet, AppBarMainComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {

}
