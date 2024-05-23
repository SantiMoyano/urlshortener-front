import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlResponse } from './url-response';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private apiUrl = 'http://localhost:8080/api/shorty';

  constructor(private http: HttpClient) {}

  generateShortUrl(longUrl: string): Observable<UrlResponse> {
    return this.http.post<UrlResponse>(`${this.apiUrl}`, longUrl);
  }
}
