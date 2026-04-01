import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../types/interfaces/post';
import { apiUrl } from '../../../shared/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly http = inject(HttpClient)

  getPosts(category?: string): Observable<Post[]> {
    const params = category? {category} : undefined;
    return this.http.get<Post[]>(`${apiUrl}/posts`, {params});
  }

  getPostBySlug(slug: string): Observable<Post> {
    return this.http.get<Post>(`${apiUrl}/posts/${slug}`);
  }
}
