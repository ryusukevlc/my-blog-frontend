import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/core/models/tag.model';
import { TagService } from 'src/app/core/services/tag.service';

@Injectable({
  providedIn: 'root',
})
export class TagResolverService {
  constructor(private tagService: TagService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Tag[]> {
    return this.tagService.getAllTags();
  }
}