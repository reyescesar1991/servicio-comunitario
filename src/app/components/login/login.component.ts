
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; //Renderizar las rutas hijas

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink], //Cada vez que se necesite una dependencia la tienen que importar en el imports
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private readonly router : Router
  ){}


  protected goToForgotPassword(){
    console.log("hola");
    
    this.router.navigate(["login/forgotPassword"]);
  }
}
