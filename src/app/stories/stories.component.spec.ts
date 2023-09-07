import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoriesComponent } from './stories.component';
import { SmallHeaderComponent } from '../small-header/small-header.component';

describe('StoriesComponent', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoriesComponent, SmallHeaderComponent]
    });
    fixture = TestBed.createComponent(StoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize storiesData', () => {
    expect(component.storiesData).toBeTruthy();
  });

  it('should initialize storiesIndex to 0', () => {
    expect(component.storiesIndex).toBe(0);
  });

  it('should set storiesDataUrl and storiesDataTitle when calling setStories', () => {
    component.setStories();
    expect(component.storiesDataUrl.length).toBeGreaterThan(0);
    expect(component.storiesDataTitle.length).toBeGreaterThan(0);
  });

  it('should sanitize a URL using getSafeUrl', () => {
    const unsafeUrl = 'https://example.com/unsafe-url';
    const safeUrl = component.getSafeUrl(unsafeUrl);
    expect(typeof safeUrl).toBe('object');
  });
});
