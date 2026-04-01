import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListPage } from './content-list-page';

describe('ContentListPage', () => {
  let component: ContentListPage;
  let fixture: ComponentFixture<ContentListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
