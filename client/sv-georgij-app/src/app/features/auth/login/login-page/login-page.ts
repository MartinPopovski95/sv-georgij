import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly formBuilder = inject(FormBuilder)

  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly form = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  submit(): void {
    if (this.form.invalid || this.loading()) return;

    this.loading.set(true);
    this.errorMessage.set(null);

    const { username, password} = this.form.getRawValue();

    this.authService.login({ username: username!, password: password!}).subscribe({
      next: () => this.router.navigate(["/admin"]),
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err?.error?.detail ?? "Login failed. Check your credentials")
      }
    })
  }
}
