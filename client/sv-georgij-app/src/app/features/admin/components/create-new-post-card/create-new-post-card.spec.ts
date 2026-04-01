import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPostCard } from './create-new-post-card';

describe('CreateNewPostCard', () => {
  let component: CreateNewPostCard;
  let fixture: ComponentFixture<CreateNewPostCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewPostCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewPostCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
