import { Component, HostListener, input, output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.html',
  styleUrl: './image-modal.scss',
})
export class ImageModal {
  readonly imageUrl = input.required<string>();
  readonly closed = output<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closed.emit();
    }
  }
}
