import { Component } from '@angular/core';
import { UrlResponse } from '../services/url-response';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.css'],
})
export class CreateUrlComponent {
  longUrl: string = '';
  shortUrl: string = '';
  baseUrl: string = 'http://localhost:8080/api/shorty/';

  constructor(private urlService: UrlService) {}

  createShortUrl() {
    this.urlService.generateShortUrl(this.longUrl).subscribe({
      next: (response: UrlResponse) => {
        this.shortUrl = response.shortUrl;
      },
      error: (error) => {
        console.error('Error creating short URL', error);
      },
      complete: () => {
        console.log('URL shortening complete');
      },
    });
  }
}
