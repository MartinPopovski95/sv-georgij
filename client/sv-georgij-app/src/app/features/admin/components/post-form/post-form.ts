import { Component, input, OnDestroy, OnInit, output } from '@angular/core';
import { Post } from '../../../content/types/interfaces/post';
import { PublishStatus } from '../../../content/types/enums/publish-status';
import { CreatePostRequest } from '../../models/admin-post.models';
import { CATEGORY_OPTIONS } from '../../constants/admin-category.constants';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, RouterLink, NgxEditorModule, MatDatepickerModule, MatFormFieldModule, MatInputModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './post-form.html',
  styleUrl: './post-form.scss',
})
export class PostForm implements OnInit, OnDestroy {
  readonly initialPost = input<Post | null>(null);
  readonly initialCategory = input<string | null>(null);
  readonly submitted = output<CreatePostRequest>();

  readonly categories = CATEGORY_OPTIONS;

  editor!: Editor
  readonly toolbar: Toolbar = [
    ["bold", "italic", "underline", "strike"],
    ["ordered_list", "bullet_list"],
    [{heading: ["h1", "h2", "h3", "h4", "h5", "h6"]}],
    ["link", "image"],
    ["align_left", "align_center", "align_right", "align_justify"],
    ["blockquote"],
  ]

  readonly form = new FormGroup({
    title: new FormControl("", {nonNullable: true, validators: [Validators.required]}),
    content: new FormControl("", {nonNullable: true, validators: [Validators.required]}),
    imageUrl: new FormControl("", {nonNullable: true, validators: [Validators.required]}),
    categoryName: new FormControl("", {nonNullable: true, validators: [Validators.required]}),
    publishStatus: new FormControl<number>(1, {nonNullable: true}),
    publishedAt: new FormControl<Date | null>(new Date()),
  })

  ngOnInit(): void {
    this.editor = new Editor();
    const post = this.initialPost();
    if(post) {
      this.form.patchValue({
        title: post.title,
        content: post.content,
        imageUrl: post.imageUrl ?? "",
        categoryName: post.categoryName,
        publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
        publishStatus: post.publishStatus === PublishStatus.Published ? 2 : 1,
      })
    } else {
      const category = this.initialCategory();
      if(category) this.form.patchValue({ categoryName: category });
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  private buildRequest(): CreatePostRequest {
    const raw = this.form.getRawValue();
    return {
      ...raw,
      publishedAt: raw.publishedAt?.toISOString(),
    };
  }

  saveDraft(): void {
    this.form.controls.publishStatus.setValue(1);
    if(this.form.invalid) return;
    this.submitted.emit(this.buildRequest());
  }

  publish(): void {
    this.form.controls.publishStatus.setValue(2);
    if(this.form.invalid) return;
    this.submitted.emit(this.buildRequest());
  }
}
