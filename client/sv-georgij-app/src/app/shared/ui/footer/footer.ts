import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  mapsShortlink = environment.mapsShortlink;
}
