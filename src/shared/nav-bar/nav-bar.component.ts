import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMenuOpen = false;

  constructor(
    private readonly router : Router, 
  ){

  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Cerrar menú al hacer clic fuera en desktop
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-links') && !target.closest('.menu-toggle')) {
      this.isMenuOpen = false;
    }
  }

  // Cerrar menú al cambiar tamaño de pantalla
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }

  protected goToLogin(){

    this.router.navigate(['auth/login']);
  }
}
