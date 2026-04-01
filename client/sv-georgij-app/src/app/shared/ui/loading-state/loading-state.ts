import { Component, input } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-state',
  imports: [MatProgressSpinner],
  templateUrl: './loading-state.html',
  styleUrl: './loading-state.scss',
})
export class LoadingState {
  readonly message = input<string>('Се вчитува...');
}
