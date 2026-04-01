import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGrid } from './content-grid';

describe('ContentGrid', () => {
  let component: ContentGrid;
  let fixture: ComponentFixture<ContentGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
