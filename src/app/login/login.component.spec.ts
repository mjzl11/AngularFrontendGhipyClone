import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isLogin to true', () => {
    expect(component.isLogin).toBe(true);
  });

  it('should set isLogin to true when handleLogin is called', () => {
    component.handleLogin();
    expect(component.isLogin).toBe(true);
  });

  it('should set isLogin to false when handleSignUp is called', () => {
    component.handleSingUp();
    expect(component.isLogin).toBe(false);
  });

});
