import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Artist {
  url: string;
  artist: string;
}

@Component({
  selector: 'trendingArtistsClips',
  templateUrl: './trending-artists-clips.component.html',
  styleUrls: ['./trending-artists-clips.component.css'],
})

export class TrendingArtistsClipsComponent {
  ArrayGifs: Array<string> = ["https://giphy.com/embed/FnMOzdvh8M9CkSbOFi", "https://giphy.com/embed/GCXxwpjgfkhO28eRzI", "https://giphy.com/embed/H2u46cKU3VaXht6Iv9", "https://giphy.com/embed/3FmUiYq9CD6R4RK94M", "https://giphy.com/embed/tHufwMDTUi20E", "https://giphy.com/embed/JfDNFU1qOZna"];
  currentIndex: number = 0; 
  itemsToShow: number = 3;

  ArrayGifsArtists: Array<Artist> = [{url: "https://giphy.com/embed/tCJ5qbMlcsA1h6EMJo", artist: 'sketchMachine'}, {url: "https://giphy.com/embed/a8DaW91IOXcUtOpNU5", artist: 'Yizr'}, {url: "https://giphy.com/embed/GaDyM2r396naHmmYlI", artist: 'dualvoidanima'}, {url: "https://giphy.com/embed/pAdA75zsSmFCJIv3u7", artist: 'A. L. Crego'},  {url: "https://giphy.com/embed/r0qx3ThOEvEpO6DsBY", artist: 'Barbara_Pozzi'}, {url: "https://giphy.com/embed/th3laVvEuTyFp89E1E", artist: 'smackaysmith'}];
  currentIndexArtists: number = 0; 
  itemsToShowArtists: number = 3;

  ArrayGifsArtistsUrl: Array<string> = []
  ArrayGifsArtistArtist: Array<string> = [] 

  getDisplayedItems(): Array<string> {
    const startIndex = this.currentIndex;
    const endIndex = Math.min(startIndex + this.itemsToShow, this.ArrayGifs.length);
    return this.ArrayGifs.slice(startIndex, endIndex);
  }

  constructor(private sanitizer: DomSanitizer) {
   this.setArrayArtists()
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  showNext() {
    if (this.currentIndex + this.itemsToShow < this.ArrayGifs.length) {
      this.currentIndex += this.itemsToShow;
    }
  }

  showPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsToShow;
    }
  }

  setArrayArtists() {
    this.ArrayGifsArtistsUrl = []
    this.ArrayGifsArtistArtist = []
    const startIndex = this.currentIndexArtists;
    const endIndex = Math.min(startIndex + this.itemsToShowArtists, this.ArrayGifsArtists.length);
    const array = this.ArrayGifsArtists.slice(startIndex, endIndex);
    array.forEach(artist => {
      this.ArrayGifsArtistsUrl.push(artist.url);
      this.ArrayGifsArtistArtist.push(artist.artist);
    });
  }

  showNextArtists() {
    if (this.currentIndexArtists + this.itemsToShowArtists < this.ArrayGifsArtists.length) {
      this.currentIndexArtists += this.itemsToShowArtists;
      this.setArrayArtists()
    }
  }

  showPreviousArtists() {
    if (this.currentIndexArtists > 0) {
      this.currentIndexArtists -= this.itemsToShowArtists;
      this.setArrayArtists()
    }
  }
}