import {Component, Inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AudioDbServiceService} from "../services/audio-db-service.service";
import {HeroComponent} from "./components/hero/hero.component";
import {DiscographyComponent} from "./components/discography/discography.component";
import {SosialMediaComponent} from "./components/sosial-media/sosial-media.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    DiscographyComponent,
    SosialMediaComponent
  ],
  providers:[AudioDbServiceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  newReleases: any;
  constructor(@Inject(AudioDbServiceService) private audioDbService: AudioDbServiceService) { }

  ngOnInit(): void {
    this.audioDbService.getNewReleases().subscribe((response: any) => {
      this.newReleases = response.album;
    }, error => {
      console.error('Error:', error);
    });
  }
}
