import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedTagService } from 'src/app/shared/shared-services/shared-tag.service';

@Injectable({
  providedIn: 'root',
})
export class AdminTagsService extends SharedTagService {
  constructor(http: HttpClient) {
    super(http);
  }
}
