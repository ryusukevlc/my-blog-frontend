import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../interfaces/tag.interface';
import { Urls } from 'src/app/core/constants/urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedTagService {
  constructor(private http: HttpClient) {}

  public getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(Urls.TAG_API.TAGS_URL, {
      reportProgress: true,
    });
  }
}
