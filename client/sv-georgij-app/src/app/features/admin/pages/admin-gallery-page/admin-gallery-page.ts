import { Component, computed, inject, signal } from '@angular/core';
import { AdminGalleryService } from '../../services/admin-gallery.service';
import { AdminGalleryCard } from '../../components/admin-gallery-card/admin-gallery-card';
import { GalleryItem } from '../../../content/types/interfaces/gallery-item';

@Component({
  selector: 'app-admin-gallery-page',
  imports: [AdminGalleryCard],
  templateUrl: './admin-gallery-page.html',
  styleUrl: './admin-gallery-page.scss',
})
export class AdminGalleryPage {
  private readonly galleryService = inject(AdminGalleryService);

  readonly items = signal<GalleryItem[]>([]);
  readonly isUploading = signal(false);

  readonly pairs = computed<[GalleryItem, GalleryItem | undefined][]>(() => {
    const items = this.items();
    const result: [GalleryItem, GalleryItem | undefined][] = [];
    if (items.length % 2 === 1) {
      result.push([items[items.length - 1], undefined]);
      for (let i = 0; i < items.length - 1; i += 2) {
        result.push([items[i], items[i + 1]]);
      }
    } else {
      for (let i = 0; i < items.length; i += 2) {
        result.push([items[i], items[i + 1]]);
      }
    }
    return result;
  });

  constructor() {
    this.galleryService.getGalleryItems().subscribe(items => this.items.set(items));
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.isUploading.set(true);
    this.galleryService.uploadGalleryItem(file).subscribe({
      next: (item) => {
        this.items.update(items => [...items, item]);
        this.isUploading.set(false);
        input.value = '';
      },
      error: () => {
        this.isUploading.set(false);
        input.value = '';
      }
    });
  }

  onDelete(id: string): void {
    if (!confirm('Дали сте сигурни дека сакате да ја избришете оваа слика?')) return;
    this.galleryService.deleteGalleryItem(id).subscribe({
      next: () => this.items.update(items => items.filter(i => i.id !== id))
    });
  }
}
