import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchOverviewSection } from './church-overview-section';

describe('ChurchOverviewSection', () => {
  let component: ChurchOverviewSection;
  let fixture: ComponentFixture<ChurchOverviewSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchOverviewSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchOverviewSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
