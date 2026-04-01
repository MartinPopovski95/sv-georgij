import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDetailsSection } from './day-details-section';

describe('DayDetailsSection', () => {
  let component: DayDetailsSection;
  let fixture: ComponentFixture<DayDetailsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayDetailsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayDetailsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
