import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiUrl } from '../../../shared/constants/app.constants';
import { Observable } from 'rxjs';
import { Post } from '../../content/types/interfaces/post';
import { CreatePostRequest, UpdatePostRequest } from '../models/admin-post.models';

@Injectable({
  providedIn: 'root',
})
export class AdminPostsService {
  private readonly http = inject(HttpClient);
  private readonly postsBase = `${apiUrl}/admin/posts`;

  getPosts(category?: string): Observable<Post[]> {
    const params = category ? { params: { category } } : {};
    return this.http.get<Post[]>(this.postsBase, params);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.postsBase}/${id}`);
  }

  createPost(data: CreatePostRequest): Observable<Post> {
    return this.http.post<Post>(`${this.postsBase}/`, data)
  }

  updatePost(id: string, data: UpdatePostRequest): Observable<Post> {
    return this.http.put<Post>(`${this.postsBase}/${id}`, data);
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.postsBase}/${id}`)
  }
}
