import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-map-section',
  imports: [],
  templateUrl: './map-section.html',
  styleUrl: './map-section.scss',
})
export class MapSection {
  mapsEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapsEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      environment.mapsEmbedUrl
    );
  }
}
