import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-componente',
  standalone: true,
  imports: [],
  templateUrl: './sub-componente.component.html',
  styleUrl: './sub-componente.component.scss'
})
export class SubComponenteComponent {

  @Input() mercado = "";
}
