import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/models/article.model';
import { Tag } from 'src/app/core/models/tag.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent {
  constructor(
    private articleService: ArticleService,
    private routingService: RoutingService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  public editArticleForm: FormGroup;

  public tags: Tag[];
  public article: Article;
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
      const tagList = [];
      for (const selectedTagId of this.selectedTagIds) {
        const tag = this.tags.find(tag => tag.id === selectedTagId);
        tagList.push(tag);
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
