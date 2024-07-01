import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface album {
  strAlbum: string,
  intYearReleased: string
}
export interface AudioDbResponseNewRelease {
  album: album[];
}
@Injectable({
  providedIn: 'root'
})
export class AudioDbServiceService {
  private apiUrl = 'https://www.theaudiodb.com/api/v1/json/2';
  private artist = 'twice';

  constructor(private http: HttpClient) { }

  getArtist() {
    return this.http.get(`${this.apiUrl}/search.php?s=${this.artist}`);
  }

  getAlbums() {
    return this.http.get(`${this.apiUrl}/album.php?s=${this.artist}`);
  }

  getNewReleases(): Observable<AudioDbResponseNewRelease> {
    return this.http.get<AudioDbResponseNewRelease>(`${this.apiUrl}/discography.php?s=${this.artist}`).pipe(
      map(response => {
        if (response && response.album) {
          response.album = response.album.slice(0, 4);
        }
        return response;
      })
    );
  }
}
