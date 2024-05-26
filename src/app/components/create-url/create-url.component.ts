import { Component } from '@angular/core';
import { UrlResponse } from '../../model/url-response';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.css'],
})
export class CreateUrlComponent {
  longUrl: string = '';
  shortUrl: string = '';
  baseUrl: string = 'https://urlshortener-lazjqqfx7a-uc.a.run.app/shorty/';
  copyButtonText: string = 'Copy';

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

  copyToClipboard(url: string): void {
    navigator.clipboard.writeText(url).then(
      () => {
        this.copyButtonText = 'Copied!';
        setTimeout(() => {
          this.copyButtonText = 'Copy';
        }, 2000);
      },
      () => {
        this.copyButtonText = 'Failed to copy';
        setTimeout(() => {
          this.copyButtonText = 'Copy';
        }, 2000);
      }
    );
  }
}
