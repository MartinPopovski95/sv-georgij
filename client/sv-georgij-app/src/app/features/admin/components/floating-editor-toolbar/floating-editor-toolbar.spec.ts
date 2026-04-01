import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingEditorToolbar } from './floating-editor-toolbar';

describe('FloatingEditorToolbar', () => {
  let component: FloatingEditorToolbar;
  let fixture: ComponentFixture<FloatingEditorToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingEditorToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingEditorToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
