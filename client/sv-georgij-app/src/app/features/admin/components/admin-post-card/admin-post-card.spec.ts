import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostCard } from './admin-post-card';

describe('AdminPostCard', () => {
  let component: AdminPostCard;
  let fixture: ComponentFixture<AdminPostCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPostCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
