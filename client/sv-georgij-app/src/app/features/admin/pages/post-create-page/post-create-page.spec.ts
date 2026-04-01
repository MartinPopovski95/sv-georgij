import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatePage } from './post-create-page';

describe('PostCreatePage', () => {
  let component: PostCreatePage;
  let fixture: ComponentFixture<PostCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCreatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
