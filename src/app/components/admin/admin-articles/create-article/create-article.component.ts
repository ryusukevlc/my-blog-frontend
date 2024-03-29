import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminTag } from 'src/app/components/admin/admin-tags/admin-tag.model';
import { AdminArticleService } from 'src/app/components/admin/admin-articles/admin-article.service';
import { RoutingService } from 'src/app/core/core-services/routing.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent {
  constructor(
    private route: ActivatedRoute,
    private articleService: AdminArticleService,
    private routingService: RoutingService,
    private formBuilder: FormBuilder
  ) {}

  public createArticleForm: FormGroup;

  public tags: AdminTag[] = [];

  public selectedTagIds: number[] = [];

  public ngOnInit() {
    this.route.data.subscribe(data => {
      this.tags = data['tags'];
      this.createArticleForm = this.formBuilder.group({
        title: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required]),
      });
    });
  }

  public clickTag(tagId: number): void {
    this.selectedTagIds.indexOf(tagId) === -1
      ? this.addTag(tagId)
      : this.removeTag(tagId);
  }

  public addTag(tagId: number): void {
    this.selectedTagIds.push(tagId);
  }

  public removeTag(selectedTagId: number): void {
    this.selectedTagIds = this.selectedTagIds.filter(
      tagId => tagId !== selectedTagId
    );
  }

  public onSubmit(): void {
    if (this.createArticleForm.valid) {
      // TODO: tagクラスではなく、tagIdをAPIに送信する。（API側の修正も必要）
      const tagList = [];
      for (const selectedTagId of this.selectedTagIds) {
        tagList.push(this.tags.find(tag => tag.id === selectedTagId));
      }

      const requestBody = {
        title: this.createArticleForm.value.title,
        content: this.createArticleForm.value.content,
        tagList: tagList,
      };

      this.articleService.createArticle(requestBody).subscribe(() => {
        this.routingService.moveToArticleList();
      });
    } else {
      this.title.markAsTouched();
      this.content.markAsTouched();
    }
  }

  get title(): FormControl {
    return this.createArticleForm.get('title') as FormControl;
  }

  get content(): FormControl {
    return this.createArticleForm.get('content') as FormControl;
  }
}
