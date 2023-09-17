import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tag } from 'src/app/models/tag.model';
import { CreateArticleService } from 'src/app/services/pages/admin/create-article/create-article.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent {
  constructor(
    private route: ActivatedRoute,
    private createArticleService: CreateArticleService,
    private routingService: RoutingService,
    private formBuilder: FormBuilder
  ) {}

  public createArticleForm: FormGroup;
  public tags: Tag[] = [];
  public selectedTagIds: number[] = [];

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.tags = data['tags'];
      this.createArticleForm = this.formBuilder.group({
        title: [''],
        content: [''],
      });
    });
  }

  public clickTag(tagId: number) {
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
      (tagId) => tagId !== selectedTagId
    );
  }

  public onSubmit() {
    const tagList = [];
    for (const selectedTagId of this.selectedTagIds) {
      const tag = this.tags.find((tag) => tag.id === selectedTagId);
      tagList.push(tag);
    }

    const requestBody = {
      title: this.createArticleForm.value.title,
      content: this.createArticleForm.value.content,
      tagList: tagList,
    };

    this.createArticleService.createArticle(requestBody).subscribe(() => {
      this.routingService.moveToArticleList();
    });
  }
}
