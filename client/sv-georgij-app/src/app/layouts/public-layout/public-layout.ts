import { Component } from '@angular/core';
import { Header } from '../../shared/ui/header/header';
import { MapSection } from '../../shared/ui/map-section/map-section';
import { Footer } from '../../shared/ui/footer/footer';
import { RouterOutlet } from '@angular/router';
import { CopyrightNotice } from "../../shared/ui/copyright-notice/copyright-notice";

@Component({
  selector: 'app-public-layout',
  imports: [Header, RouterOutlet, MapSection, Footer, CopyrightNotice],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {

}
