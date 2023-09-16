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
  public tags: Tag[];

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.tags = data['tags'];
      this.createArticleForm = this.formBuilder.group({
        title: [''],
        content: [''],
        tagList: this.formBuilder.array(
          this.tags.map(() => this.formBuilder.control(false))
        ),
      });
      console.log('終了');
    });
  }

  public onSubmit() {
    const selectedTags = this.tags.filter(
      (_: Tag, i: number) => this.createArticleForm.value.tagList[i]
    );
    console.log(selectedTags);

    const requestBody = {
      title: this.createArticleForm.value.title,
      content: this.createArticleForm.value.content,
      tagList: selectedTags,
    };

    this.createArticleService
      .createArticle(requestBody)
      .subscribe((article) => {
        console.log(article);
        this.routingService.moveToArticleList();
      });
  }
}
