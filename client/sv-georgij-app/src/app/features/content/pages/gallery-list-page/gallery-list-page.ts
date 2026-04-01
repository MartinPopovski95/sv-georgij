import { Component, computed, inject, input, signal } from '@angular/core';
import { SECTION_META, SectionKey } from '../../constants/section-meta';
import { CategoryLabelPipe } from '../../../../shared/pipes/category-label-pipe';
import { GalleryGrid } from "../../components/gallery-grid/gallery-grid";
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery-list-page',
  imports: [CategoryLabelPipe, GalleryGrid],
  templateUrl: './gallery-list-page.html',
  styleUrl: './gallery-list-page.scss',
})
export class GalleryListPage {
  private readonly galleryService = inject(GalleryService);
  readonly section = input.required<SectionKey>();

  readonly category = computed(() => SECTION_META[this.section()].category);
  readonly title = computed(() => SECTION_META[this.section()].title);

  readonly isLoading = signal(true);

  readonly galleryItem = toSignal(
    toObservable(this.category).pipe(
      tap(() => this.isLoading.set(true)),
      switchMap(c => this.galleryService.getGalleryItems().pipe(
        catchError(() => of([]))
      )),
      tap(() => this.isLoading.set(false)),
    ),
    { initialValue: [] }
  );
}
