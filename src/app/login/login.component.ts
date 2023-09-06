import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogin: boolean = true

  handleLogin() {
    this.isLogin = true
  }

  handleSingUp() {
    this.isLogin = false
  }
}
