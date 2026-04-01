import { Component, computed, input, signal } from '@angular/core';
import { GalleryItem } from '../../types/interfaces/gallery-item';
import { ImageModal } from '../../../../shared/ui/image-modal/image-modal';

@Component({
  selector: 'app-gallery-card',
  imports: [ImageModal],
  templateUrl: './gallery-card.html',
  styleUrl: './gallery-card.scss',
})
export class GalleryCard {
   readonly firstItem = input.required<GalleryItem>();
   readonly secondItem = input<GalleryItem | undefined>(undefined);
   readonly index = input<number>(0);

   readonly cardType = computed(() => this.index() % 2 === 0 ? 'card-type-1' : 'card-type-2');
   readonly selectedImageUrl = signal<string | null>(null);

   openModal(url: string): void { this.selectedImageUrl.set(url); }
   closeModal(): void { this.selectedImageUrl.set(null); }
}
