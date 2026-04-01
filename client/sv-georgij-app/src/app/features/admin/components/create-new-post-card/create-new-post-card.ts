import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-new-post-card',
  imports: [RouterLink],
  templateUrl: './create-new-post-card.html',
  styleUrl: './create-new-post-card.scss',
})
export class CreateNewPostCard {
  readonly category = input<string>();
}
