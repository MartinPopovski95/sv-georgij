import { Component, input } from '@angular/core';
import { ContentCard } from '../content-card/content-card';
import { Post } from '../../types/interfaces/post';
import { LoadingState } from '../../../../shared/ui/loading-state/loading-state';
import { EmptyState } from '../../../../shared/ui/empty-state/empty-state';


@Component({
  selector: 'app-content-grid',
  imports: [ContentCard, LoadingState, EmptyState],
  templateUrl: './content-grid.html',
  styleUrl: './content-grid.scss',
})
export class ContentGrid {
  readonly posts = input<Post[]>([]);
  readonly isLoading = input<boolean>(false);
}
