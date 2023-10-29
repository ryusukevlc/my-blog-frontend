import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminArticle } from 'src/app/components/admin/articles/admin-article.model';
import { AdminTag } from 'src/app/components/admin/tags/admin-tag.model';
import { AdminArticleService } from 'src/app/components/admin/articles/admin-article.service';
import { RoutingService } from 'src/app/core/core-services/routing.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
})
export class EditArticleComponent {
  constructor(
    private articleService: AdminArticleService,
    private routingService: RoutingService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  public editArticleForm: FormGroup;

  public tags: AdminTag[];
  public article: AdminArticle;
  public selectedTagIds: number[];

  public ngOnInit() {
    this.route.data.subscribe(data => {
      this.article = data['article'];
      this.selectedTagIds = this.article.tagList.map(tag => tag.id);
      this.tags = data['tags'];
      this.editArticleForm = this.formBuilder.group({
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

  public onSubmit() {
    if (this.editArticleForm.valid) {
      // TODO: tagクラスではなく、tagIdをAPIに送信する。（API側の修正も必要）
      const tagList = [];
      for (const selectedTagId of this.selectedTagIds) {
        tagList.push(this.tags.find(tag => tag.id === selectedTagId));
      }

      const requestBody = {
        id: this.article.id,
        title: this.editArticleForm.value.title,
        content: this.editArticleForm.value.content,
        tagList: tagList,
      };

      this.articleService.updateArticle(requestBody).subscribe(() => {
        this.routingService.moveToArticleList();
      });
    } else {
      this.title.markAsTouched();
      this.content.markAsTouched();
    }
  }

  get title(): FormControl {
    return this.editArticleForm.get('title') as FormControl;
  }

  get content(): FormControl {
    return this.editArticleForm.get('content') as FormControl;
  }
}
