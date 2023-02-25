import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TagApiService } from 'src/app/api/interface/tag-api.service';
import { Article } from 'src/app/models/article.model';
import { ResponseBody } from 'src/app/models/response-body.model';
import { Tag } from 'src/app/models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagResolverService {
  constructor(private tagApiService: TagApiService) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<ResponseBody<Tag[]>> {
    return this.tagApiService.getAllTags();
  }
}
