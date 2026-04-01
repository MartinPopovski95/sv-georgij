import { Component, computed, inject, signal } from '@angular/core';
import { ContentService } from '../../../content/services/content.service';
import { ContentCard } from '../../../content/components/content-card/content-card';
import { GalleryService } from '../../../content/services/gallery.service';
import { GalleryCard } from '../../../content/components/gallery-card/gallery-card';
import { GalleryItem } from '../../../content/types/interfaces/gallery-item';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { LoadingState } from '../../../../shared/ui/loading-state/loading-state';
import { EmptyState } from '../../../../shared/ui/empty-state/empty-state';

type TabKey = 'all' | 'Blog' | 'Events' | 'News' | 'Catechism' | 'Gallery';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'all',       label: 'Сите' },
  { key: 'Blog',      label: 'Блог' },
  { key: 'Events',    label: 'Настани' },
  { key: 'News',      label: 'Новости' },
  { key: 'Catechism', label: 'Катехизис' },
  { key: 'Gallery',   label: 'Галерија' },
];

@Component({
  selector: 'app-latest-posts-section',
  imports: [ContentCard, GalleryCard, LoadingState, EmptyState],
  templateUrl: './latest-posts-section.html',
  styleUrl: './latest-posts-section.scss',
})
export class LatestPostsSection {
  private readonly contentService = inject(ContentService);
  private readonly galleryService = inject(GalleryService);

  readonly tabs = TABS;
  readonly activeTab = signal<TabKey>('all');

  private readonly allPosts = toSignal(this.contentService.getPosts().pipe(catchError(() => of([]))));
  private readonly allGalleryItems = toSignal(this.galleryService.getGalleryItems().pipe(catchError(() => of([]))));

  readonly isPostsLoading = computed(() => this.allPosts() === undefined);
  readonly isGalleryLoading = computed(() => this.allGalleryItems() === undefined);

  readonly displayedPosts = computed(() => {
    const tab = this.activeTab();
    const posts = this.allPosts() ?? [];
    const filtered = tab === 'all' ? posts : posts.filter(p => p.categoryName === tab);
    return filtered
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 4);
  });

  readonly displayedGalleryPairs = computed(() => {
    const items = [...(this.allGalleryItems() ?? [])]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 8);
    const result: [GalleryItem, GalleryItem | undefined][] = [];
    for (let i = 0; i < items.length; i += 2) {
      result.push([items[i], items[i + 1]]);
    }
    return result;
  });

  setTab(key: TabKey): void {
    this.activeTab.set(key);
  }
}
