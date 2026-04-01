import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.scss',
  host: { '[class.collapsed]': 'collapsed()' },
})
export class AdminSidebar {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly collapsed = signal(false);
  readonly userName = computed(() => this.authService.currentUser()?.name ?? '');
  readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());

  toggle(): void {
    this.collapsed.update(v => !v);
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
