import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SearcherComponent } from '../searcher/searcher.component';
import { TrendingArtistsClipsComponent } from '../trending-artists-clips/trending-artists-clips.component';
import { StoriesComponent } from '../stories/stories.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SearcherComponent, TrendingArtistsClipsComponent, StoriesComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
