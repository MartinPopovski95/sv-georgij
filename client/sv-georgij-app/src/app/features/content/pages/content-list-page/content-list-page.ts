import { Component, computed, inject, input, signal } from '@angular/core';
import { ContentGrid } from "../../components/content-grid/content-grid";
import { ContentService } from '../../services/content.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';
import { SECTION_META, type SectionKey} from '../../constants/section-meta';
import { CategoryLabelPipe } from '../../../../shared/pipes/category-label-pipe';

@Component({
  selector: 'app-content-list-page',
  imports: [ContentGrid, CategoryLabelPipe],
  templateUrl: './content-list-page.html',
  styleUrl: './content-list-page.scss',
})
export class ContentListPage {
  private readonly contentService = inject(ContentService)

  readonly section = input.required<SectionKey>();

  readonly category = computed(() => SECTION_META[this.section()].category);
  readonly title = computed(() => SECTION_META[this.section()].title);

  readonly isLoading = signal(true);

  readonly posts = toSignal(
    toObservable(this.category).pipe(
      tap(() => this.isLoading.set(true)),
      switchMap(c => this.contentService.getPosts(c).pipe(
        catchError(() => of([]))
      )),
      tap(() => this.isLoading.set(false)),
    ),
    { initialValue: [] }
  );
}
