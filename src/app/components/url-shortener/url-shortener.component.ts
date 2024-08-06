import { Component } from '@angular/core';
import { UrlService, URLResponse } from '../../services/url.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent {
  longUrl: string = '';
  shortUrl: string = '';
  qrCodeImage: string = '';
  loading: boolean = false;

  constructor(private urlService: UrlService) {}

  shortenUrl(): void {
    this.loading = true;
    this.urlService.shortenUrl(this.longUrl).subscribe({
      next: (response: URLResponse) => {
        this.shortUrl = response.shortUrl;
        this.qrCodeImage = response.qrCode.qrCodeImage;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  redirectToShortUrl(): void {
    if (this.shortUrl) {
      window.open(this.shortUrl, '_blank');
    }
  }
}
