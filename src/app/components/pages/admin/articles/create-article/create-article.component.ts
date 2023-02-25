import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
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
    private routingService: RoutingService
  ) {}

  createArticleForm = new FormGroup({
    action: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    tagList: new FormArray([]),
  });

  public action: string = 'create';
  public tags: Tag[];
  public selectedTagIds: number[] = new Array();

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.tags = data['responseBody'].data;
    });
  }

  public selectOrCancel(id: number, event: any) {
    let tagList = this.createArticleForm.get('tagList') as FormArray;
    if (event.target.checked) {
      tagList.push(new FormControl(id));
    } else {
      tagList.removeAt(
        tagList.controls.findIndex((control) => control.value.id == id)
      );
    }
  }

  public onSubmit() {
    this.createArticleService
      .createArticle(this.createArticleForm.value)
      .subscribe((response) => {
        let status = response.status;
        console.log(status);
        this.routingService.moveToArticleList();
      });
  }
}
