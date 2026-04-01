import { Component, computed, input } from '@angular/core';
import { GalleryItem } from '../../types/interfaces/gallery-item';
import { GalleryCard } from "../gallery-card/gallery-card";
import { LoadingState } from '../../../../shared/ui/loading-state/loading-state';
import { EmptyState } from '../../../../shared/ui/empty-state/empty-state';

@Component({
  selector: 'app-gallery-grid',
  imports: [GalleryCard, LoadingState, EmptyState],
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.scss',
})
export class GalleryGrid {
  readonly galleryItem = input<GalleryItem[]>([]);
  readonly isLoading = input<boolean>(false);

  readonly pairs = computed(() => {
    const items = this.galleryItem();
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
}
