import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
    private route: ActivatedRoute
  ) {}

  editArticleForm = new FormGroup({
    id: new FormControl(),
    action: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    tagList: new FormArray([]),
  });

  public action: string = 'edit';
  public tags: Tag[];
  public article: Article;
  public id: number;

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.tags = data['responseBody1'].data;
      this.article = data['responseBody2'].data;
      console.log(this.article);
      this.id = this.article.id;
    });
  }

  public selectOrCancel(id: number, event: any) {
    let tagList = this.editArticleForm.get('tagList') as FormArray;
    if (event.target.checked) {
      tagList.push(new FormControl(id));
    } else {
      tagList.removeAt(
        tagList.controls.findIndex((control) => control.value.id == id)
      );
    }
  }

  public onSubmit() {
    this.editArticleService
      .updateArticle(this.editArticleForm.value)
      .subscribe((response) => {
        console.log(response.status);
        this.routingService.moveToArticleList();
      });
  }
}
