import { Component, computed, DOCUMENT, inject, input } from '@angular/core';
import { Post } from '../../types/interfaces/post';
import { RouterLink } from "@angular/router";
import { DatePipe } from '@angular/common';
import { LocaleDatePipe } from '../../../../shared/pipes/locale-date-pipe';
import { CategoryLabelPipe } from '../../../../shared/pipes/category-label-pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-content-details-page',
  imports: [RouterLink, LocaleDatePipe, CategoryLabelPipe],
  templateUrl: './content-details-page.html',
  styleUrl: './content-details-page.scss',
})
export class ContentDetailsPage {
  private readonly sanitizer = inject(DomSanitizer);
  readonly safeContent = computed<SafeHtml>(() => 
    this.sanitizer.bypassSecurityTrustHtml(this.contentItem().content)
  )

  private readonly document = inject(DOCUMENT)

  contentItem = input.required<Post>();

  private readonly shareUrl = computed(() => encodeURIComponent(this.document.URL));
  private readonly shareTitle = computed(() => encodeURIComponent(this.contentItem().title));

  readonly facebookShareUrl = computed(() =>
    `https://www.facebook.com/sharer/sharer.php?u=${this.shareUrl()}`
  );
  
  readonly twitterShareUrl = computed(() =>
    `https://twitter.com/intent/tweet?url=${this.shareUrl()}&text=${this.shareTitle()}`
  );

  readonly viberShareUrl = computed(() =>
    `viber://forward?text=${this.shareTitle()}%20${this.shareUrl()}`
  );

  readonly whatsappShareUrl = computed(() =>
    `https://wa.me/?text=${this.shareTitle()}%20${this.shareUrl()}`
  );

  readonly telegramShareUrl = computed(() =>
    `https://t.me/share/url?url=${this.shareUrl()}&text=${this.shareTitle()}`
  );
}
