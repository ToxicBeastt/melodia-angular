import {Component, Inject, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "../components/button/button.component";
import {albumDetail, AudioDbServiceService} from "../services/audio-db-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  newAlbum: any;
  tracks: albumDetail[] = [];
  currentTrack: albumDetail | null = null;
  constructor(
    @Inject(AudioDbServiceService)
    private audioDbService: AudioDbServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || '';
      this.audioDbService.getAlbums(id).subscribe((response: any) => {
        this.newAlbum = response.album[0]
      }, error => {
        console.error('Error:', error);
      });
      this.audioDbService.getTrackAlbum(id).subscribe((response: any) => {
        this.tracks = response.album
      }, error => {
        console.error('Error:', error);
      });
    });
  }

  playTrack(track: any) {
    this.currentTrack = track;
  }

  playPause(audioPlayer: HTMLAudioElement) {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
}
