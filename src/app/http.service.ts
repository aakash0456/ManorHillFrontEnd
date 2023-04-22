import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  URLValue: string = 'https://example-mhaapplication.onrender.com/time?timezone=';

  constructor(private http: HttpClient) {}

  get(data: string) {
    return this.http.get(this.URLValue + data);
  }

}
