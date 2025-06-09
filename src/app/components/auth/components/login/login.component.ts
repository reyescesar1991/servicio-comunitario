import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(
    private readonly router : Router
  ){
  }

  protected goToForgotPassword(){
    this.router.navigate(["auth/forgot-password"]);
  }

  protected goToRegister(){

    this.router.navigate(["auth/register"]);
  }
}
