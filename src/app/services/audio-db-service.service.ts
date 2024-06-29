import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AudioDbServiceService {
  private apiUrl = 'https://www.theaudiodb.com/api/v1/json/2';

  constructor(private http: HttpClient) { }

  getArtist(artistName: string) {
    return this.http.get(`${this.apiUrl}/search.php?s=${artistName}`);
  }

  getAlbums(artistId: number) {
    return this.http.get(`${this.apiUrl}/album.php?i=${artistId}`);
  }
}
