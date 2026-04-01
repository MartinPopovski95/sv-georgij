import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostsSection } from './latest-posts-section';

describe('LatestPostsSection', () => {
  let component: LatestPostsSection;
  let fixture: ComponentFixture<LatestPostsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestPostsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPostsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
