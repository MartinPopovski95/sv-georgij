import { Component } from '@angular/core';
import { HeroSection } from '../components/hero-section/hero-section';
import { LatestPostsSection } from '../components/latest-posts-section/latest-posts-section';
import { FeaturedCalendarSection } from '../components/featured-calendar-section/featured-calendar-section';
import { ChurchOverviewSection } from "../components/church-overview-section/church-overview-section";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, LatestPostsSection, FeaturedCalendarSection, ChurchOverviewSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
