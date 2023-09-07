import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendingArtistsClipsComponent } from './trending-artists-clips.component';
import { SmallHeaderComponent } from '../small-header/small-header.component';

describe('TrendingArtistsClipsComponent', () => {
  let component: TrendingArtistsClipsComponent;
  let fixture: ComponentFixture<TrendingArtistsClipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingArtistsClipsComponent, SmallHeaderComponent]
    });
    fixture = TestBed.createComponent(TrendingArtistsClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize ArrayGifs and currentIndex', () => {
    expect(component.ArrayGifs).toBeTruthy();
    expect(component.currentIndex).toBe(0);
  });

  it('should initialize ArrayGifsArtists and currentIndexArtists', () => {
    expect(component.ArrayGifsArtists).toBeTruthy();
    expect(component.currentIndexArtists).toBe(0);
  });

  it('should set ArrayGifsArtistsUrl and ArrayGifsArtistArtist when calling setArrayArtists', () => {
    component.setArrayArtists();

    // Check that ArrayGifsArtistsUrl and ArrayGifsArtistArtist are populated
    expect(component.ArrayGifsArtistsUrl.length).toBeGreaterThan(0);
    expect(component.ArrayGifsArtistArtist.length).toBeGreaterThan(0);
  });

  it('should sanitize a URL using getSafeUrl', () => {
    const unsafeUrl = 'https://example.com/unsafe-url';
    const safeUrl = component.getSafeUrl(unsafeUrl);
    expect(typeof safeUrl).toBe('object');
  });

  it('should show next items when calling showNext', () => {
    const initialIndex = component.currentIndex;
    component.showNext();
    expect(component.currentIndex).toBe(initialIndex + component.itemsToShow);
  });

  it('should show previous items when calling showPrevious', () => {
    component.currentIndex = 3;
    const initialIndex = component.currentIndex;
    component.showPrevious();
    expect(component.currentIndex).toBe(initialIndex - component.itemsToShow);
  });

  it('should show next artists when calling showNextArtists', () => {
    const initialIndex = component.currentIndexArtists;
    component.showNextArtists();
    expect(component.currentIndexArtists).toBe(initialIndex + component.itemsToShowArtists);
  });

  it('should show previous artists when calling showPreviousArtists', () => {
    component.currentIndexArtists = 3;
    const initialIndex = component.currentIndexArtists;
    component.showPreviousArtists();
    expect(component.currentIndexArtists).toBe(initialIndex - component.itemsToShowArtists);
  });
});
