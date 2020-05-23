//Componente que implementa a interface de login no aplicativo
import { Component, OnInit } from '@angular/core';

//Serviço de autenticação para utilizar as funções sinup() e login()
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  //email e senha do usuário
  email: string;
  password: string;
  
  constructor(public authService: AuthService) {}

  ngOnInit(): void { }

  //registro de usuário no aplicativo
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  //login de usuário no aplicativo
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

}
