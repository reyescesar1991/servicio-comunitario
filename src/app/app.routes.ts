import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mi-nuevo-componente', // <---- Define la ruta URL (ej: /mi-nuevo-componente)
    loadComponent: () => import('./components/mi-nuevo-componente/mi-nuevo-componente.component').then(mod => mod.MiNuevoComponenteComponent)
  },
  {
    path: 'login', // <---- Define la ruta URL (ej: /mi-nuevo-componente)
    loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent),
    children: [
        {   
            path: 'sub-login',
            loadComponent: () => import('./components/sub-componente/sub-componente.component').then(mod => mod.SubComponenteComponent),
        }
    ]
  },
  
];
