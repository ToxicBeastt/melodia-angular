import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AudioDbServiceService {
  private apiUrl = 'https://www.theaudiodb.com/api/v1/json/2';
  private artist = 'coldplay';

  constructor(private http: HttpClient) { }

  getArtist() {
    return this.http.get(`${this.apiUrl}/search.php?s=${this.artist}`);
  }

  getAlbums() {
    return this.http.get(`${this.apiUrl}/album.php?s=${this.artist}`);
  }

  getNewReleases() {
    return this.http.get(`${this.apiUrl}/discography.php?s=${this.artist}`);
  }
}
