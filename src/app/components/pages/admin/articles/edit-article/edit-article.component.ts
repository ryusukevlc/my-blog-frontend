import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { Tag } from 'src/app/models/tag.model';
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
  public initialSelectedTagIds: number[];

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.article = data['article'];
      this.initialSelectedTagIds = this.article.tagList.map((tag) => tag.id);
      this.tags = data['tags'];
      console.log(this.article);
      console.log(this.initialSelectedTagIds);
      this.editArticleForm = this.formBuilder.group({
        title: [''],
        content: [''],
        tagList: this.formBuilder.array(
          // TODO: もともと選択されているタグはtrueでセットするようにする
          this.tags.map((tag, i) => {
            let isSelected = false;
            this.article.tagList.forEach((selectedTag, i) => {
              selectedTag.id === tag.id ? (isSelected = true) : null;
            });
            console.log(this.initialSelectedTagIds.includes(tag.id));
            this.formBuilder.control(isSelected);
          })
        ),
      });
    });
  }

  public onSubmit() {
    const selectedTags = this.tags.filter(
      (_, i) => this.editArticleForm.value.tagList[i]
    );
    console.log(selectedTags);
    console.log(this.tags);
    console.log(this.editArticleForm.value.tagList);

    const requestBody = {
      id: this.article.id,
      title: this.editArticleForm.value.title,
      content: this.editArticleForm.value.content,
      tagList: selectedTags,
    };

    this.editArticleService.updateArticle(requestBody).subscribe(() => {
      console.log('update完了');
      this.routingService.moveToArticleList();
    });
  }
}
