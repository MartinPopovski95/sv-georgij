import { Component, computed, inject, input } from '@angular/core';
import { Post } from '../../types/interfaces/post';
import { RouterLink } from "@angular/router";
import { LocaleDatePipe } from '../../../../shared/pipes/locale-date-pipe';
import { CategoryLabelPipe } from '../../../../shared/pipes/category-label-pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content-card',
  imports: [RouterLink, LocaleDatePipe, CategoryLabelPipe],
  templateUrl: './content-card.html',
  styleUrl: './content-card.scss',
})
export class ContentCard {
  readonly post = input.required<Post>();

  readonly index = input<number>(0);
  readonly cardType = computed(() => this.index() % 2 === 0 ? "card-type-1" : "card-type-2")

  readonly postRoute = computed(() => {
    const map: Record<string, string> = {
      Blog: '/blog', Events: '/nastani', News: '/novosti',
      Catechism: '/katehizis', Gallery: '/galerija',
    };
    return map[this.post().categoryName] ?? '/blog';
  });

    private readonly sanitizer = inject(DomSanitizer);
  readonly safeContent = computed<SafeHtml>(() => 
    this.sanitizer.bypassSecurityTrustHtml(this.post().content)
  )
}
