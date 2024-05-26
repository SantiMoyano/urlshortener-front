import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlResponse } from '../model/url-response';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private apiUrl = 'https://urlshortener-lazjqqfx7a-uc.a.run.app/shorty';

  constructor(private http: HttpClient) {}

  generateShortUrl(longUrl: string): Observable<UrlResponse> {
    return this.http.post<UrlResponse>(`${this.apiUrl}`, longUrl);
  }
}
