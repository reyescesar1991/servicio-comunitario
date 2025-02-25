import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login', //padre
    loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent),
    children: [


      //hijo
        {   
            path: 'sub-login',
            loadComponent: () => import('./components/sub-componente/sub-componente.component').then(mod => mod.SubComponenteComponent),
        }


    ]
  },
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
      },
      {
        path: 'perfil',
        loadComponent: () => import('./components/main-component/components/perfil/perfil.component').then(mod => mod.PerfilComponent),
        children: [
          {
            path: 'datos-personales',
            loadComponent: () => import('./components/main-component/components/perfil/components/datos-personales/datos-personales.component').then(mod => mod.DatosPersonalesComponent),
          },
          {
            path: 'mis-pedidos',
            loadComponent: () => import('./components/main-component/components/perfil/components/mis-pedidos/mis-pedidos.component').then(mod => mod.MisPedidosComponent),
          },
          {
            path: 'mis-direcciones',
            loadComponent: () => import('./components/main-component/components/perfil/components/mis-direcciones/mis-direcciones.component').then(mod => mod.MisDireccionesComponent),
          },
          {
            path: 'mi-billetera',
            loadComponent: () => import('./components/main-component/components/perfil/components/mi-billetera/mi-billetera.component').then(mod => mod.MiBilleteraComponent),
          },
          {
            path: 'mis-reservas',
            loadComponent: () => import('./components/main-component/components/perfil/components/mis-reservas/mis-reservas.component').then(mod => mod.MisReservasComponent),
          },
          {
            path: 'mis-suscripciones',
            loadComponent: () => import('./components/main-component/components/perfil/components/mis-suscripciones/mis-suscripciones.component').then(mod => mod.MisSuscripcionesComponent),
          },
          {
            path: 'mi-cuenta',
            loadComponent: () => import('./components/main-component/components/perfil/components/mi-cuenta/mi-cuenta.component').then(mod => mod.MiCuentaComponent),
          },
          {
            path: 'notificacion',
            loadComponent: () => import('./components/main-component/components/perfil/components/notificacion/notificacion.component').then(mod => mod.NotificacionComponent),
          },
          {
            path: 'comentarios-foros',
            loadComponent: () => import('./components/main-component/components/perfil/components/comentarios-foros/comentarios-foros.component').then(mod => mod.ComentariosForosComponent),
          },
          {
            path: 'calendario',
            loadComponent: () => import('./components/main-component/components/perfil/components/calendario/calendario.component').then(mod => mod.CalendarioComponent),
          }
        ]
      },
      
    ]
  }, 








];
