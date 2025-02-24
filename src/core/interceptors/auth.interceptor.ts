import { HttpInterceptorFn } from '@angular/common/http';

export const OAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const oauthToken = "this.authService.getOAuthToken()";

  if (oauthToken) {
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${oauthToken}`)
    });

    return next(clonedRequest);
  }
  
  return next(req);
};