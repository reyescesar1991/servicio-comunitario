
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; //Renderizar las rutas hijas

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet], //Cada vez que se necesite una dependencia la tienen que importar en el imports
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  
}
