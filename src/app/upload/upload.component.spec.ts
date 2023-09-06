import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadComponent } from './upload.component';
import { SmallHeaderComponent } from '../small-header/small-header.component';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent, SmallHeaderComponent]
    });
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component)
    expect(component).toBeTruthy();
  });
});
