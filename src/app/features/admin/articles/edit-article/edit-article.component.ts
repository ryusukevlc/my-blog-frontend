import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/models/article.model';
import { Tag } from 'src/app/core/models/tag.model';
import { EditArticleService } from 'src/app/services/pages/admin/edit-article/edit-article.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent {
  constructor(
    private editArticleService: EditArticleService,
    private routingService: RoutingService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  public editArticleForm: FormGroup;

  public tags: Tag[];
  public article: Article;
  public selectedTagIds: number[];

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.article = data['article'];
      this.selectedTagIds = this.article.tagList.map((tag) => tag.id);
      this.tags = data['tags'];
      this.editArticleForm = this.formBuilder.group({
        title: [''],
        content: [''],
      });
    });
  }

  /**
   * タグクリック時の処理
   *
   * @param tagId タグID
   * @returns void
   */
  public clickTag(tagId: number): void {
    if (this.selectedTagIds.indexOf(tagId) === -1) {
      this.addTag(tagId);
    } else {
      this.removeTag(tagId);
    }
  }

  /**
   * タグを選択済みリストに追加する
   *
   * @param tagId タグID
   */
  public addTag(tagId: number): void {
    this.selectedTagIds.push(tagId);
  }

  /**
   * タグを選択済みリストから除外する
   *
   * @param selectedTagId 選択済みのタグID
   */
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
      id: this.article.id,
      title: this.editArticleForm.value.title,
      content: this.editArticleForm.value.content,
      tagList: tagList,
    };

    this.editArticleService.updateArticle(requestBody).subscribe(() => {
      this.routingService.moveToArticleList();
    });
  }
}
