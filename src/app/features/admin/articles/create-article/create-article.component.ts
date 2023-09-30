import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tag } from 'src/app/core/models/tag.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent {
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private routingService: RoutingService,
    private formBuilder: FormBuilder
  ) {}

  public createArticleForm: FormGroup;

  public tags: Tag[] = [];

  public selectedTagIds: number[] = [];

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.tags = data['tags'];
      this.createArticleForm = this.formBuilder.group({
        title: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required]),
      });
    });
  }

  public clickTag(tagId: number): void {
    if (this.selectedTagIds.indexOf(tagId) === -1) {
      this.addTag(tagId);
    } else {
      this.removeTag(tagId);
    }
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
      const tagList = [];
      for (const selectedTagId of this.selectedTagIds) {
        const tag = this.tags.find(tag => tag.id === selectedTagId);
        tagList.push(tag);
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
