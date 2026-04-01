import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightNotice } from './copyright-notice';

describe('CopyrightNotice', () => {
  let component: CopyrightNotice;
  let fixture: ComponentFixture<CopyrightNotice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightNotice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightNotice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
