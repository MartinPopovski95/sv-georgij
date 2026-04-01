import { Component, input, computed, output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleDatePipe } from '../../../../shared/pipes/locale-date-pipe';
import { CategoryLabelPipe } from '../../../../shared/pipes/category-label-pipe';
import { Post } from '../../../content/types/interfaces/post';
import { PublishStatus } from '../../../content/types/enums/publish-status';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-post-card',
  imports: [RouterLink, LocaleDatePipe, CategoryLabelPipe],
  templateUrl: './admin-post-card.html',
  styleUrl: './admin-post-card.scss',
})
export class AdminPostCard {
  readonly post = input.required<Post>();
  readonly index = input<number>(0);
  readonly delete = output<string>()

  readonly cardType = computed(() => this.index() % 2 === 0 ? "card-type-1" : "card-type-2")
  readonly isPublished = computed(() => this.post().publishStatus === PublishStatus.Published)

    private readonly sanitizer = inject(DomSanitizer);
  readonly safeContent = computed<SafeHtml>(() => 
    this.sanitizer.bypassSecurityTrustHtml(this.post().content)
  )
}
