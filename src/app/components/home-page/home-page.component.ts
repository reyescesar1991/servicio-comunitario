import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ButtonComponent, HeroComponent,FeaturesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
