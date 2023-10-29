import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/shared/interfaces/tag.interface';
import { SharedTagService } from 'src/app/shared/shared-services/shared-tag.service';

@Injectable({
  providedIn: 'root',
})
export class AdminTagsService {
  constructor(private sharedTagService: SharedTagService) {}

  public getAllTags(): Observable<Tag[]> {
    return this.sharedTagService.getAllTags();
  }
}
