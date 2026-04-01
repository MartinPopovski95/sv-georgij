import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintGeorgeSection } from './saint-george-section';

describe('SaintGeorgeSection', () => {
  let component: SaintGeorgeSection;
  let fixture: ComponentFixture<SaintGeorgeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaintGeorgeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaintGeorgeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
