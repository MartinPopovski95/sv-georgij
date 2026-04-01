import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../content/types/interfaces/post';
import { PostForm } from '../../components/post-form/post-form';
import { CreatePostRequest, UpdatePostRequest } from '../../models/admin-post.models';
import { AdminPostsService } from '../../services/admin-posts.service';

@Component({
  selector: 'app-post-edit-page',
  imports: [PostForm],
  templateUrl: './post-edit-page.html',
  styleUrl: './post-edit-page.scss',
})
export class PostEditPage {
  private readonly postsService = inject(AdminPostsService);
  private readonly router = inject(Router);

  readonly post = input.required<Post>();

  onUpdate(data: CreatePostRequest): void {
    const post = this.post();
    const request: UpdatePostRequest = {
      title: data.title,
      slug: post.slug,
      content: data.content,
      imageUrl: data.imageUrl,
      category: data.categoryName,
      publishStatus: data.publishStatus,
      publishedAt: data.publishedAt ?? post.publishedAt,
    };
    this.postsService.updatePost(post.id, request).subscribe({
      next: () => this.router.navigate(['/admin/posts']),
    });
  }
}
