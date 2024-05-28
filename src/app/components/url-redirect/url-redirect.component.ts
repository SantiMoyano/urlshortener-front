import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-url-redirect',
  templateUrl: './url-redirect.component.html',
  styleUrls: ['./url-redirect.component.css'],
})
export class UrlRedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private urlService: UrlService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const shortUrl = params['shortUrl'];
      this.urlService.resolveShortUrl(shortUrl).subscribe({
        next: (response) => {
          window.location.href = response.shortUrl;
        },
        error: (error) => {
          console.error('Error resolving short URL', error);
          this.router.navigate(['/error']);
        },
      });
    });
  }
}
