import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { SmallHeaderComponent } from './small-header.component';
import { AppModule } from '../app.module';

describe('SmallHeaderComponent', () => {
  let component: SmallHeaderComponent;
  let fixture: ComponentFixture<SmallHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallHeaderComponent]
    });
    fixture = TestBed.createComponent(SmallHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
