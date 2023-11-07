import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/shared/interfaces/tag.interface';
import { SharedTagService } from 'src/app/shared/shared-services/shared-tag.service';

@Injectable({
  providedIn: 'root',
})
export class TagResolverService {
  constructor(private sharedTagService: SharedTagService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Tag[]> {
    return this.sharedTagService.getAllTags();
  }
}
