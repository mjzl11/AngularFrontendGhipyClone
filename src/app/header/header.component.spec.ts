import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially set isDropdownVisible to false', () => {
    expect(component.isDropdownVisible).toBe(false);
  });

  it('should show dropdown when calling showDropdown', () => {
    component.showDropdown();
    expect(component.isDropdownVisible).toBe(true);
  });

  it('should hide dropdown when calling hideDropdown', () => {
    component.hideDropdown();
    expect(component.isDropdownVisible).toBe(false);
  });
});
