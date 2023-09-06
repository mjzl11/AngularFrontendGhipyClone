import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Story {
  url: string;
  title: string;
}

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
  storiesData: Array<Story> = [{ url: 'https://giphy.com/embed/I0k4YAqrxuWMGietSj', title: 'Tennessee state Rep. Gloria Johnson announced Tue. her bid for the U.S. Senate, setting up a 2024 showdown in the state.' }, { url: 'https://giphy.com/embed/v5USW6VR0i10YCzrIN', title: 'Give Back for Internatinal Charity Day' }, { url: 'https://giphy.com/embed/0jSwytKAFLDvUGveOk', title: 'Win the Moment whit These GIFs' }, { url: 'https://giphy.com/embed/CwkqmEhBOasul1wSkZ', title: 'Happy National GIF Day' }, { url: 'https://giphy.com/embed/LfSop7pqbciBzFmHbH', title: 'I Got You This GIF' }, { url: 'https://giphy.com/embed/TevSMPyX5SK6N1I3ez', title: 'Butler is all of us watching Alcaraz work.' }]

  storiesIndex: number = 0; 

  storiesDataUrl: Array<string> = []
  storiesDataTitle: Array<string> = [] 

  constructor(private sanitizer: DomSanitizer) {
    this.setStories()
   }

   setStories() {
    this.storiesDataUrl = [];
    this.storiesDataTitle = [];
    const startIndex = this.storiesIndex;
    const endIndex = Math.min(startIndex + this.storiesData.length, this.storiesData.length);
    const array = this.storiesData.slice(startIndex, endIndex); 
    array.forEach(story => {
      this.storiesDataUrl.push(story.url);
      this.storiesDataTitle.push(story.title); 
    });
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
