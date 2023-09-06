import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingArtistsClipsComponent } from './trending-artists-clips.component';

describe('TrendingArtistsClipsComponent', () => {
  let component: TrendingArtistsClipsComponent;
  let fixture: ComponentFixture<TrendingArtistsClipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingArtistsClipsComponent]
    });
    fixture = TestBed.createComponent(TrendingArtistsClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
