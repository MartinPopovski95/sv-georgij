import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCalendarSection } from './featured-calendar-section';

describe('FeaturedCalendarSection', () => {
  let component: FeaturedCalendarSection;
  let fixture: ComponentFixture<FeaturedCalendarSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCalendarSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCalendarSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
