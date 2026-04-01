import { Component, computed, input, output } from '@angular/core';
import { GalleryItem } from '../../../content/types/interfaces/gallery-item';

@Component({
  selector: 'app-admin-gallery-card',
  templateUrl: './admin-gallery-card.html',
  styleUrl: './admin-gallery-card.scss',
})
export class AdminGalleryCard {
  readonly firstItem = input.required<GalleryItem>();
  readonly secondItem = input<GalleryItem | undefined>(undefined);
  readonly index = input<number>(0);
  readonly deleteRequested = output<string>();
  readonly cardType = computed(() =>
    this.index() % 2 === 0 ? 'card-type-1' : 'card-type-2'
  );
}
