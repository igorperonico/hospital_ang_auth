import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  loginData = {
    login: '',
    password: ''
  }

  registerData = {
    login: '',
    password: '',
    role: 'PATIENT'
  }

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.loginData).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token)
        this.router.navigate(['/appointments'])

      },
      error: () => alert("Invalid username or password")
    })

  }

  register() {
    this.authService.register(this.registerData).subscribe({
      next: () => {
        alert('Registration successful')
      },
      error: () => alert("Invalid username or password")
    })
  }

  logout() {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    });
  }


}
