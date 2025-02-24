import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'zengaku', 
    loadComponent: () => import('./components/main-component/main-component.component').then(mod => mod.MainComponentComponent),
    children: [
      {
        path: 'nosotros',
        loadComponent: () => import('./components/main-component/components/nosotros/nosotros.component').then(mod => mod.NosotrosComponent),
      },
      {
        path: 'equipo',
        loadComponent: () => import('./components/main-component/components/equipo/equipo.component').then(mod => mod.EquipoComponent),
      },
      {
        path: 'solicitudes',
        loadComponent: () => import('./components/main-component/components/solicitudes/solicitudes.component').then(mod => mod.SolicitudesComponent),
      },
      {
        path: 'aspectos-academicos',
        loadComponent: () => import('./components/main-component/components/aspectos-academicos/aspectos-academicos.component').then(mod => mod.AspectosAcademicosComponent),
      },
      {
        path: 'contacto',
        loadComponent: () => import('./components/main-component/components/contacto/contacto.component').then(mod => mod.ContactoComponent),
      },
      {
        path: 'actividades-zengaku',
        loadComponent: () => import('./components/main-component/components/actividades-zengaku/actividades-zengaku.component').then(mod => mod.ActividadesZengakuComponent),
      },
      {
        path: 'inscripciones',
        loadComponent: () => import('./components/main-component/components/inscripciones/inscripciones.component').then(mod => mod.InscripcionesComponent),
      },
      {
        path: 'preguntas-frecuentes',
        loadComponent: () => import('./components/main-component/components/preguntas-frecuentes/preguntas-frecuentes.component').then(mod => mod.PreguntasFrecuentesComponent),
      },
      {
        path: 'equipo',
        loadComponent: () => import('./components/main-component/components/equipo/equipo.component').then(mod => mod.EquipoComponent),
      },
      {
        path: 'mas',
        loadComponent: () => import('./components/main-component/components/mas/mas.component').then(mod => mod.MasComponent),
        children: [
          {
            path: 'reserva-online',
            loadComponent: () => import('./components/main-component/components/mas/components/reserva-online/reserva-online.component').then(mod => mod.ReservaOnlineComponent),
          },
          {
            path: 'blog',
            loadComponent: () => import('./components/main-component/components/mas/components/blog/blog.component').then(mod => mod.BlogComponent),
          },
          {
            path: 'planes-precios',
            loadComponent: () => import('./components/main-component/components/mas/components/planes-precios/planes-precios.component').then(mod => mod.PlanesPreciosComponent),
          },
          {
            path: 'foro',
            loadComponent: () => import('./components/main-component/components/mas/components/foro/foro.component').then(mod => mod.ForoComponent),
          },
          {
            path: 'miembros',
            loadComponent: () => import('./components/main-component/components/mas/components/miembros/miembros.component').then(mod => mod.MiembrosComponent),
          },
        ]
      }
    ]
  },
  {
    path: 'login', 
    loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent),
    children: [
        {   
            path: 'sub-login',
            loadComponent: () => import('./components/sub-componente/sub-componente.component').then(mod => mod.SubComponenteComponent),
        }
    ]
  },
  
];
