import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl, serverUrl } from '../../../shared/constants/app.constants';
import { GalleryItem } from '../../content/types/interfaces/gallery-item';

@Injectable({
  providedIn: 'root',
})
export class AdminGalleryService {
  private readonly http = inject(HttpClient);
  private readonly galleryBase = `${apiUrl}/gallery`;

  getGalleryItems(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(this.galleryBase).pipe(
      map(items => items.map(item => ({ ...item, url: `${serverUrl}${item.url}` })))
    );
  }

  uploadGalleryItem(file: File): Observable<GalleryItem> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<GalleryItem>(this.galleryBase, formData).pipe(
      map(item => ({ ...item, url: `${serverUrl}${item.url}` }))
    );
  }

  deleteGalleryItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.galleryBase}/${id}`);
  }
}
