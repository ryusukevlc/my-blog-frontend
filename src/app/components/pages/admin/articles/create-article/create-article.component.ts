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
      console.log(this.tags);
      this.createArticleForm = this.formBuilder.group({
        title: [''],
        content: [''],
      });
    });
  }

  public clickTag(tagId: number) {
    if (this.selectedTagIds.indexOf(tagId) === -1) {
      console.log('true');
      this.addTag(tagId);
    } else {
      console.log('false');
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
    // const selectedTags = this.tags.filter(
    //   (_: Tag, i: number) => this.createArticleForm.value.tagList[i]
    // );

    const requestBody = {
      title: this.createArticleForm.value.title,
      content: this.createArticleForm.value.content,
      tagList: this.selectedTagIds,
    };

    this.createArticleService
      .createArticle(requestBody)
      .subscribe((article) => {
        this.routingService.moveToArticleList();
      });
  }
}
