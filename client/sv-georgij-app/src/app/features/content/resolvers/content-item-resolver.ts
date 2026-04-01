import { RedirectCommand, ResolveFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core'
import { catchError, of } from 'rxjs';
import { ContentService } from '../services/content.service';
import { Post } from '../types/interfaces/post';

export const contentItemResolver: ResolveFn<Post | RedirectCommand> = (route: ActivatedRouteSnapshot) => {
  const contentService = inject(ContentService);
  const router = inject(Router);

  const slug = route.paramMap.get("slug")!;

  return contentService.getPostBySlug(slug).pipe(
    catchError(() => {
      return of(new RedirectCommand(router.parseUrl("slug")));
    })
  )
};
