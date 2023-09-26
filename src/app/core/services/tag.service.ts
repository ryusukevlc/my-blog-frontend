import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/core/constants/urls';
import { Tag } from 'src/app/core/models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private http: HttpClient) {}

  public getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(Urls.TAGS_URL, {
      reportProgress: true,
    });
  }
}
