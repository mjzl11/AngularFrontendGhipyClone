import { Component } from '@angular/core';

@Component({
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  placeholders: Array<string> = [' Username + tag to search within a verified channel', ' Search all the GIFs and Stickers']
  isPlaceholderCero: boolean = true

  ngOnInit() {
    setInterval(() => {
      this.isPlaceholderCero = !this.isPlaceholderCero;
    }, 2000); 
  }
}
