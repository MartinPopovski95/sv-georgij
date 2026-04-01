import { Component, signal, inject, DOCUMENT, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private document = inject(DOCUMENT);

  menuOpen = signal(false);
  dropdownOpen = signal(false);

  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    this.document.body.style.overflow = next ? 'hidden' : '';
    this.document.documentElement.style.overflow = next ? 'hidden' : '';
  }

  toggleDropdown(): void {
    this.dropdownOpen.update(v => !v);
  }

  closeAll(): void {
    this.menuOpen.set(false);
    this.dropdownOpen.set(false);
    this.document.body.style.overflow = '';
    this.document.documentElement.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) this.closeAll();
  }
}
