//Serviço implementado para autenticação do usuário
//Implementa as funções de registro, login e logout do usuário na aplicação

import { Injectable } from '@angular/core';

//Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Formato de usuário obtido do Firebase
  //O usuário definido possui um email e uma senha
  user: Observable<firebase.User>;

  //Obtém o estado do usuário no banco de dados (autenticado ou não)
  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = _firebaseAuth.authState;
  }
  
  //Registro de usuário na base da aplicação
  signup(email: string, password: string) {
    this._firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        alert('Usuário e/ou senha informados para registro não válidos');
      });    
  }

  //Login de usuário na aplicação
  login(email: string, password: string) {
    this._firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        alert('Usuário e/ou senha não válido(s)');
      });
  }

  //Logout de usuário
  logout() {
    this._firebaseAuth.signOut();
  }

}
