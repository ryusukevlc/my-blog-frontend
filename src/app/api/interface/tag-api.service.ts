import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/constants/urls';
import { ResponseBody } from 'src/app/models/response-body.model';
import { Tag } from 'src/app/models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagApiService {
  constructor(private http: HttpClient) {}

  public getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(Urls.TAGS_URL, {
      reportProgress: true,
    });
  }
}
