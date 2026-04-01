import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiUrl, serverUrl } from '../../../shared/constants/app.constants';
import { map, Observable } from 'rxjs';
import { GalleryItem } from '../types/interfaces/gallery-item';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly http = inject(HttpClient);
  private readonly galleryBase = `${apiUrl}/gallery`;

  getGalleryItems(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(this.galleryBase).pipe(
      map(items => items.map(item => ({ ...item, url: `${serverUrl}${item.url}` })))
    );
  }
}
