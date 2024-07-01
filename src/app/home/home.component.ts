import {Component, Inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AudioDbServiceService} from "../services/audio-db-service.service";
import {HeroComponent} from "./components/hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent
  ],
  providers:[AudioDbServiceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  newReleases: any;
  constructor(@Inject(AudioDbServiceService) private audioDbService: AudioDbServiceService) { }

  ngOnInit(): void {
    this.audioDbService.getAlbums().subscribe(response => {
      console.log('Received response:', response);
      this.newReleases = response;
    }, error => {
      console.error('Error:', error);
    });
  }
}
