import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface URLResponse {
  uid: string;
  longUrl: string;
  shortUrl: string;
  qrCode: { uid: string, qrCodeImage: string };
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  shortenUrl(longUrl: string): Observable<URLResponse> {
    return this.http.post<URLResponse>(`${this.apiUrl}/shorten`, { longUrl });
  }
}
