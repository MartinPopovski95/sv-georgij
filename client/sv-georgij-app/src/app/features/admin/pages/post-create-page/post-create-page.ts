import { Component, inject, input } from '@angular/core';
import { PostForm } from "../../components/post-form/post-form";
import { AdminPostsService } from '../../services/admin-posts.service';
import { Router } from '@angular/router';
import { CreatePostRequest } from '../../models/admin-post.models';

@Component({
  selector: 'app-post-create-page',
  imports: [PostForm],
  templateUrl: './post-create-page.html',
  styleUrl: './post-create-page.scss',
})
export class PostCreatePage {
  private readonly postsService = inject(AdminPostsService);
  private readonly router = inject(Router);

  readonly category = input<string>();

  onCreate(data: CreatePostRequest): void {
    this.postsService.createPost(data).subscribe({
      next: () => this.router.navigate(["/admin/posts"])
    });
  }
}
