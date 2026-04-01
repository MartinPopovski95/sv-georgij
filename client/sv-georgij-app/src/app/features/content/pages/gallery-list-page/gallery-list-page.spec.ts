import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryListPage } from './gallery-list-page';

describe('GalleryListPage', () => {
  let component: GalleryListPage;
  let fixture: ComponentFixture<GalleryListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
