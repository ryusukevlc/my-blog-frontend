import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TagApiService } from 'src/app/api/interface/tag-api.service';
import { Tag } from 'src/app/core/models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagResolverService {
  constructor(private tagApiService: TagApiService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Tag[]> {
    return this.tagApiService.getAllTags();
  }
}
