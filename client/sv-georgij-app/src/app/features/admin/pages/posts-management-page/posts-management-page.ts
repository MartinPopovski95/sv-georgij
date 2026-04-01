import { Component, effect, inject, input, signal } from '@angular/core';
import { AdminPostsService } from '../../services/admin-posts.service';
import { Post } from '../../../content/types/interfaces/post';
import { CreateNewPostCard } from '../../components/create-new-post-card/create-new-post-card';
import { CategoryLabelPipe } from '../../../../shared/pipes/category-label-pipe';
import { AdminPostCard } from '../../components/admin-post-card/admin-post-card';

@Component({
  selector: 'app-posts-management-page',
  imports: [CreateNewPostCard, CategoryLabelPipe, AdminPostCard],
  templateUrl: './posts-management-page.html',
  styleUrl: './posts-management-page.scss',
})
export class PostsManagementPage {
  private readonly postsService = inject(AdminPostsService);

  readonly category = input<string>();

  private readonly _posts = signal<Post[]>([]);
  readonly posts = this._posts.asReadonly();

  constructor() {
    effect(() => {
      const category = this.category();
      this.postsService.getPosts(category).subscribe(posts => this._posts.set(posts))
    })
  }

  onDelete(id: string): void {
    if(!confirm("Дали сте сигурни дека сакате да го избришете овој пост?")) return;
    this.postsService.deletePost(id).subscribe({
      next: () => this._posts.update(posts => posts.filter(p => p.id !== id)),
    });
  }
}
