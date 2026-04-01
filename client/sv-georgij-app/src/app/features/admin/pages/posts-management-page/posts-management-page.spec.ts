import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsManagementPage } from './posts-management-page';

describe('PostsManagementPage', () => {
  let component: PostsManagementPage;
  let fixture: ComponentFixture<PostsManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsManagementPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
