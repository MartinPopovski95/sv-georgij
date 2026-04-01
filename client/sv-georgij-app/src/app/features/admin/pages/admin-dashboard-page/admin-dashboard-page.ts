import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AdminPostsService } from '../../services/admin-posts.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { PublishStatus } from '../../../content/types/enums/publish-status';

@Component({
  selector: 'app-admin-dashboard-page',
  imports: [RouterLink],
  templateUrl: './admin-dashboard-page.html',
  styleUrl: './admin-dashboard-page.scss',
})
export class AdminDashboardPage {
  private readonly postsService = inject(AdminPostsService);

  readonly posts = toSignal(this.postsService.getPosts(), { initialValue: [] });

  readonly totalPosts = computed(() => this.posts().length);
  readonly publishedPosts = computed(
    () => this.posts().filter(p => p.publishStatus === PublishStatus.Published).length
  );
  readonly draftPosts = computed(
    () => this.posts().filter(p => p.publishStatus === PublishStatus.Draft).length
  );
}
