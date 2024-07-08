import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface album {
  idAlbum: string,
  strAlbum: string,
  intYearReleased: string,
  strAlbumThumb: string,
}
export interface AudioDbResponseNewRelease {
  album: album[];
}

export interface albumDetail {
  idAlbum: string,
  strAlbum: string,
  strArtist: string,
  intYearReleased: string,
  strLabel: string,
  strAlbumThumb: string,
  strAudioUrl: string,
}

export interface AudioDbResponseAlbumDetail {
  album: albumDetail[]
}
@Injectable({
  providedIn: 'root'
})
export class AudioDbServiceService {
  private apiUrl = 'https://www.theaudiodb.com/api/v1/json/2';
  private artist = 'coldplay';

  constructor(private http: HttpClient) { }

  getTrackAlbum(id: string) {
    return this.http.get<AudioDbResponseAlbumDetail>(`${this.apiUrl}/album.php?i=112024`).pipe(
      map(response => {
        return response;
      })
    );
  }

  getAlbums(id: string) {
    return this.http.get<AudioDbResponseAlbumDetail>(`${this.apiUrl}/searchalbum.php?s=${this.artist}`).pipe(
      map(response => {
        if (response && response.album) {
          const filteredAlbum = response.album.find(item => item.idAlbum === id);
          return filteredAlbum ? { album: [filteredAlbum] } : null;
        }
        return response;
      })
    );
  }


  getNewReleases(): Observable<AudioDbResponseNewRelease> {
    return this.http.get<AudioDbResponseNewRelease>(`${this.apiUrl}/searchalbum.php?s=${this.artist}`).pipe(
      map(response => {
        if (response && response.album) {
          response.album = response.album.slice(0, 4);
        }
        return response;
      })
    );
  }
}
