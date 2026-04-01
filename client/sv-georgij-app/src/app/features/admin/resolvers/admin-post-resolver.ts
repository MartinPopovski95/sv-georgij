import { ActivatedRouteSnapshot, RedirectCommand, ResolveFn, Router } from '@angular/router';
import { Post } from '../../content/types/interfaces/post';
import { inject } from '@angular/core';
import { catchError, of } from 'rxjs';
import { AdminPostsService } from '../services/admin-posts.service';

export const adminPostResolver: ResolveFn<Post | RedirectCommand> = (
  route: ActivatedRouteSnapshot
) => {
  const service = inject(AdminPostsService);
  const router = inject(Router);

  const id = route.paramMap.get("id")!;

  return service.getPostById(id).pipe(
    catchError(() => of(new RedirectCommand(router.parseUrl("/admin/posts"))))
  )
};
